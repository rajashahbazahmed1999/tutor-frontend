import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    
    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl grid md:grid-cols-2 gap-6">

       
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          <p className="text-gray-600 mb-4">
            Have questions or need help? Reach out to us anytime.
          </p>

          <div className="space-y-2 text-gray-700">
            <p>📧 Email: support@tutorhub.com</p>
            <p>📞 Phone: +92 300 1234567</p>
            <p>📍 Location: Pakistan</p>
          </div>
        </div>

      
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>

        </form>

      </div>
    </div>
  );
}

export default Contact;