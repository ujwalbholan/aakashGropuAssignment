import ContactUsForm from "../contactUsComponent/ContactUsForm";
import ContactDetails from "../contactUsComponent/ContactDetails";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-24 py-16 px-6 bg-gray-100 min-h-screen flex justify-center items-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        <ContactDetails />
        <ContactUsForm />
      </div>
    </section>
  );
};

export default Contact;
