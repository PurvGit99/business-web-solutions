const projects = [
  {
    number: "01",
    category: "FITNESS",
    title: "NexFit",
    description: "Modern website concept for a gym and fitness business.",
    type: "project-gym",
  },
  {
    number: "02",
    category: "DANCE",
    title: "Dance Studio",
    description: "Creative website concept for a dance academy and studio.",
    type: "project-dance",
  },
  {
    number: "03",
    category: "FOOD",
    title: "Café & Restaurant",
    description: "Clean digital experience for a restaurant or local café.",
    type: "project-restaurant",
  },
  {
    number: "04",
    category: "BUSINESS",
    title: "Local Business",
    description: "Professional website concept for a growing local business.",
    type: "project-business",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="work">
      <div className="section-heading">
        <p className="section-tag">OUR WORK</p>

        <h2>Projects that speak for themselves.</h2>

        <p>
          A few examples of websites and digital experiences
          we can create for different types of businesses.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.number}>
            <div className={`project-image ${project.type}`}>
              {project.title}
            </div>

            <div className="project-info">
              <span>
                {project.number} — {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a
  href="https://nexfit-fitness-website.netlify.app"
  target="_blank"
  rel="noopener noreferrer"
>
  View Project →
</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;