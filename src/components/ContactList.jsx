import React from 'react';
import styles from './ContactList.module.css';

class ContactList extends React.Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={styles.button}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
