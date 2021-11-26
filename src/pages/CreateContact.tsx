import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateContactController } from "../controllers/Contact.Controler";

const CreateContact: React.FC = () => {
  let navigate = useNavigate();
  const firstNameiInput = useRef<HTMLInputElement>(null);
  const lastNameInput = useRef<HTMLInputElement>(null);

  async function handleClick() {
    const dataContact = {
      FirstName: firstNameiInput.current!.value,
      LastName: lastNameInput.current!.value,
    };

    const response = await CreateContactController(dataContact);
    if (response.status === "success") {
      return navigate("/contact-list");
    }
    alert(response.description);
  }

  return (
    <div className="App">
      <main className="App-main">
        <Link to="/home">Go Back</Link>
        <h1>Create Contact</h1>
        <form>
          <label>First Name</label>
          <input name='First Name' type="text" ref={firstNameiInput} />
          <label>Last Name</label>
          <input name="Last Name" type="text" ref={lastNameInput} />
          <button type="button" onClick={handleClick}>
            Confirm
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateContact;
