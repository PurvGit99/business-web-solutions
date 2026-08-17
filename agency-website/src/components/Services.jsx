function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <p className="section-tag">WHAT WE DO</p>

        <h2>Services built for your business.</h2>

        <p>
          From simple business websites to custom web applications,
          we build digital solutions that help businesses grow.
        </p>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <span>01</span>
          <h3>Business Websites</h3>
          <p>
            Professional and responsive websites for businesses,
            startups and local brands.
          </p>
        </div>

        <div className="service-card">
          <span>02</span>
          <h3>Web Applications</h3>
          <p>
            Custom web applications with modern frontend and
            reliable backend systems.
          </p>
        </div>

        <div className="service-card">
          <span>03</span>
          <h3>Website Redesign</h3>
          <p>
            Transform outdated websites into modern,
            fast and user-friendly experiences.
          </p>
        </div>

        <div className="service-card">
          <span>04</span>
          <h3>Website Maintenance</h3>
          <p>
            Updates, improvements, bug fixes and ongoing
            technical support for your website.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;