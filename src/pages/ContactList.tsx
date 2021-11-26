import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactListController } from "../controllers/Contact.Controler";
import { Contact } from "../interfaces/Contact.Interface";

const ContactList: React.FC = () => {
  const [contactsList, setContactsList] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContactList();
  }, []);

  async function getContactList() {
    const response = await ContactListController();
    setContactsList(response);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Loading ...</h1>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <main className="App-main">
        <Link to="/home">Go Back</Link>
        <h1>Contact list</h1>

        {contactsList.length === 0 ? (
          <span>No contact Found</span>
        ) : (
          <ul>
            {contactsList.map((contact, index) => {
              return <li key={index}>{contact.Name}</li>;
            })}
          </ul>
        )}
      </main>
    </div>
  );
};

export default ContactList;
