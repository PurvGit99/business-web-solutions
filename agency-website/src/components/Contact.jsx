import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const whatsappNumber = "918219783044";

    const message = `
New Website Enquiry 🚀

Name: ${formData.name}
Business: ${formData.business}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <p className="section-tag">LET&apos;S WORK TOGETHER</p>

        <h2>
          Have a project
          <br />
          in mind?
        </h2>

        <p>
          Tell us about your business and what you need.
          We&apos;ll get back to you and discuss the best solution.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Business Name</label>

            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Your business"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
            />
          </div>
        </div>

        <div className="form-group">
          <label>What do you need?</label>

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Business Website">Business Website</option>
            <option value="Web Application">Web Application</option>
            <option value="Website Redesign">Website Redesign</option>
            <option value="Website Maintenance">
              Website Maintenance
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>

          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-button">
          Send Enquiry →
        </button>
      </form>
    </section>
  );
}

export default Contact;