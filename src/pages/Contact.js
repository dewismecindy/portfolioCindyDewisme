import Mail from "../components/Mail";
import Sphere from "../components/Sphere";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="contact-page">
          <div className="sphere">
            <Sphere />
          </div>

          <Mail />
          <p className="adress">
            85 rue Marcel Hénaux 59200 TOURCOING
            <br />
            06 95 29 59 41
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
