import React, { useEffect, useRef, useState } from "react";

export default function FunctionComponent() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const fNameRef = useRef();
  const lNameRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    fNameRef.current.focus();
  }, []);

  function onFirstInputKey(e) {
    if (e.key === "Enter") {
      lNameRef.current.focus();
    }
  }
  function onLastInputKey(e) {
    if (e.key === "Enter") {
      buttonRef.current.focus();
    }
  }

  function run() {
    console.log({ fName, lName });
  }

  return (
    <div>
      FunctionComponent
      <input
        ref={fNameRef}
        onKeyDown={onFirstInputKey}
        placeholder="first name"
        value={fName}
        onChange={(e) => setFName(e.target.value)}
      />
      <input
        ref={lNameRef}
        onKeyDown={onLastInputKey}
        placeholder="last name"
        value={lName}
        onChange={(e) => setLName(e.target.value)}
      />
      <button ref={buttonRef} onClick={run}>
        save
      </button>
    </div>
  );
}
