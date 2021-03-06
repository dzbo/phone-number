import "./App.css";
import { useEffect } from "react";
import PhoneNumber from "./components/phone-number";

function App() {
  useEffect(() => {
    const phoneNumberRegExp = /[0-9/]+/;
    function onKeyPress(event) {
      if (!phoneNumberRegExp.test(event.key)) {
        event.preventDefault();
      }
    }

    const $phoneNumberElement = document.getElementById("phone-number");
    $phoneNumberElement.addEventListener("keypress", onKeyPress);
    return () =>
      $phoneNumberElement.removeEventListener("keypress", onKeyPress);
  }, []);

  useEffect(() => {
    const phoneCodeRegExp = /[+0-9/]+/;
    function onKeyPress(event) {
      if (!phoneCodeRegExp.test(event.key)) {
        event.preventDefault();
      }
    }

    const $phoneCodeElement = document.getElementById("phone-code");
    $phoneCodeElement.addEventListener("keypress", onKeyPress);
    return () => $phoneCodeElement.removeEventListener("keypress", onKeyPress);
  }, []);

  return (
    <div className="container mt-5">
      <form className="w-50 phone-form">
        <PhoneNumber />
      </form>
    </div>
  );
}

export default App;
