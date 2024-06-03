import db from "./firebase.js";
import { doc, setDoc, deleteDoc } from "firebase/firestore";

export const addData = (text, id) => {
  try {
    setDoc(doc(db, "messages", id), {
      text: text,
      id: id,
    });

    setTimeout(() => {
      removeData(id);
    }, 5000);
  } catch (error) {
    console.log(
      `${error}: message ${text} id ${id} could not be added to firestore`
    );
  }
};

export const removeData = (id) => {
  try {
    deleteDoc(doc(db, "messages", id));
  } catch (error) {
    console.log(
      `${error}: message id ${id} could not be deleted from firestore`
    );
  }
};
