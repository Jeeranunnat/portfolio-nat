import './CardContact.css';

const CardContact = (contact) => {
  return (
    <div className="contact-card">
      <div className="contact-icon">{<contact.icon />}</div>
      <div className="contact-name">{contact.name}</div>
      <div className="contact-detail">{contact.detail}</div>
      <div className="contact-link">{contact.contactLink}</div>
    </div>
  );
};
export default CardContact;
