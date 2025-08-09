import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: collect form data
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    // Show success toast
    toast.success('Message sent successfully!', {
      position: 'top-right',
      autoClose: 2000, // 2 seconds
    });

    // Clear the form
    form.reset();
  };

  return (
    <div className="contact-page d-flex align-items-center">
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <div className="row g-5 align-items-center">
          {/* Contact Info */}
          <div className="col-md-5">
            <div className="contact-info p-4 shadow rounded bg-white">
              <h4>Contact Details</h4>
              <p><strong>Email:</strong> Flightbooker@example.com</p>
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Location:</strong> Maharastra,India</p>
              <p><strong>Working Hours:</strong> Mon - Fri, 10 AM to 6 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="contact-form p-4 shadow rounded bg-white">
              <h4 className="mb-4">Send a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <input type="email" name="email" className="form-control" id="email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" name="subject" className="form-control" id="subject" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea name="message" className="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 shadow-sm">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
