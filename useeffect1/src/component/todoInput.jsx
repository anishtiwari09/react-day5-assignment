import { useState } from "react";
import Button from "./Button";

export default function TodoInput({ onCreateTask }) {
  const [text, setText] = useState("");
  const handleClick = () => onCreateTask(text);
  return (
    <div>
      <input
        type="text"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button title="ADD" onClick={handleClick} />
    </div>
  );
}
