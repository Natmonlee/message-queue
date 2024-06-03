import "./NotificationSpace.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { collection, query, onSnapshot } from "firebase/firestore";
import db from "../../firebase/firebase";
import { useEffect } from "react";
import { syncMessages } from "../../redux/actions/messageActions";

export function NotificationSpace({ currentMessages }) {

  useEffect(() => {
    const queryData = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(queryData, (querySnapshot) => {
      const databaseMessages = [];
      querySnapshot.forEach((message) => {
        databaseMessages.push({
          text: message.data().text,
          id: message.data().id,
        });
      });
      syncMessages(databaseMessages);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div id="notification-space">
      {currentMessages[0] &&
        currentMessages.map((message) => (
          <p key={message.id}>{message.text}</p>
        ))}
    </div>
  );
}

NotificationSpace.propTypes = {
  currentMessages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  currentMessages: state,
});

const ConnectedNotificationSpace = connect(mapStateToProps)(NotificationSpace);

export default ConnectedNotificationSpace;