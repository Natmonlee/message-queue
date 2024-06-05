import "./NotificationSpace.css";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import db from "../../firebase/firebase";
import { useEffect } from "react";
import { syncMessages } from "../../redux/actions/messageActions";

export function NotificationSpace({ currentMessages }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const queryData = query(
      collection(db, "messages"),
      orderBy("timestamp", "asc")
    );
    const unsubscribe = onSnapshot(queryData, (querySnapshot) => {
      const databaseMessages = [];
      querySnapshot.forEach((message) => {
        databaseMessages.push({
          text: message.data().text,
          id: message.id,
        });
      });
      dispatch(syncMessages(databaseMessages));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

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
