import ContactData from '../data/ContactData.js';
import CardComponent from '../components/CardComponents/CardContact.js';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-header header">
        <h1>CONTACT ME</h1>
      </div>

      <div className="contact-area">
        {ContactData.map((contact, index) => {
          return <CardComponent {...contact} key={index} />;
        })}
      </div>
    </section>
  );
};
export default Contact;
