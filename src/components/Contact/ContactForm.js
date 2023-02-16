import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { db } from "../Firebase/Firebase";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function ContactForm() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [textArea, setTextArea] = useState("");

  const handleTextArea = function (e) {
    setTextArea(e.target.value);
  };

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "tel",
      placeholder: "+40xxxxxxxxx",
      pattern: "[0-9]{10,}",
      label: "Phone Number",
      required: true,
    },
  ];

  const handleInputs = function (e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "inputs"), {
        ...values,
        textArea,
        timestamp: serverTimestamp(),
      });
      setValues({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
      });

      setTextArea("");
      alert("Thank you for your message.");
    } catch (err) {
      alert("Problem loading request. Please refresh.");
    }
  };

  return (
    <section className='contact-section' id='contact'>
      <div className='container'>
        <h2 className='heading-secondary cta-heading'>Let's get in touch</h2>
        <form id='cta-form' className='cta-form' onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <div key={input.id}>
              <label htmlFor={input.id}>
                {input.label}
                &nbsp;<span>*</span>
              </label>

              <input
                {...input}
                value={values[input.name]}
                onChange={handleInputs}
              />
            </div>
          ))}
          <div className='text-area-container'>
            <label htmlFor='textarea'>Got anything to add?</label>
            <textarea
              rows='10'
              id='textarea'
              className='textarea'
              placeholder='Message'
              onChange={handleTextArea}
              value={textArea}
            ></textarea>
          </div>
        </form>
        <button
          className='btn-dark btn-submit'
          onSubmit={handleSubmit}
          form='cta-form'
        >
          Send message&nbsp;
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </section>
  );
}
