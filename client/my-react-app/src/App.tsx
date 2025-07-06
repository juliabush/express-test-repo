import axios from "axios";

const App = () => {
  const handleSendEmail = async () => {
    try {
      await axios.post("http://localhost:3000/sendmail", {
        to: "j.elizabethbush@gmail.com",
        sub: "This is subject",
        msg: "This is a test email",
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <div className="email-send-container">
      <button className="email-send" onClick={handleSendEmail}>
        Press here to recieve an email
      </button>
    </div>
  );
};

export default App;
