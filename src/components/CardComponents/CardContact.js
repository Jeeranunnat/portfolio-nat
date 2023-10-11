import { useContext } from 'react';
import './CardContact.css';
import { ThemeContext } from '../../App';

const CardContact = (contact) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="contact-card"
      className={theme === 'light' ? 'cardContact-light' : 'cardContact-dark'}
    >
      <div className="contact-icon">{<contact.icon />}</div>
      <div className="contact-name">{contact.name}</div>
      <div className="contact-detail">{contact.detail}</div>
      <div className="contact-link link">
        <button>
          <a href={contact.href}>{contact.contactLink}</a>
        </button>
      </div>
    </div>
  );
};
export default CardContact;
