import "./InputForm.css";
import { addMessage } from "../../redux/actions/messageActions";
import { addData } from "../../firebase/firestoreActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import idGenerator from "../../utilities/idGenerator";

function InputForm() {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newId = idGenerator();
    dispatch(addMessage(textInput, newId));
    addData(textInput, newId);
    setTextInput("");
  };

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Your Message Here"
        onChange={handleChange}
        value={textInput}
        id="text-input"
      ></input>
      <input
        type="submit"
        value="SUBMIT"
        onClick={handleSubmit}
        id="submit"
      ></input>
    </>
  );
}

export default InputForm;
