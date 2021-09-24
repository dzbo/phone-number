import { useEffect } from "react";

function PhoneNumber() {
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
    <>
      <label className="form-label">Phone number</label>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control phone-code"
          placeholder="+49"
          id="phone-code"
          aria-label="Enter phone code"
          required
        />
        <input
          type="text"
          className="form-control phone-number"
          placeholder="123456789"
          id="phone-number"
          aria-label="Enter phone number"
          required
        />
      </div>
    </>
  );
}

export default PhoneNumber;
