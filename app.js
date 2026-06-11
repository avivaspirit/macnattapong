// Edit this array to update project names, descriptions, links, and visual themes.
const projects = [
  {
    name: "Flowstable",
    category: "Community · Ideas · Gathering",
    description:
      "A trusted circle for honest conversations around life, business, and investment — built around the energy of a shared table.",
    url: "https://flowstable.vercel.app",
    theme: "flowstable",
    background: "#2b251f",
    foreground: "#f5ebdc",
  },
  {
    name: "Fengshui Balance",
    category: "Spatial intelligence · Advisory",
    description:
      "A precise, contemporary practice for understanding the relationship between people, timing, and the spaces they inhabit.",
    url: "https://fengshuibalance.vercel.app",
    theme: "fengshui",
    background: "#ded8c8",
    foreground: "#1d3028",
  },
  {
    name: "Aviva Spirit",
    category: "Sacred objects · Architecture",
    description:
      "Modern sacred architecture in marble — bringing heritage, material craft, and considered presence into contemporary interiors.",
    url: "https://avivaspirit.com",
    theme: "aviva",
    background: "#60474a",
    foreground: "#fff3e8",
  },
  {
    name: "Menam DC",
    category: "Digital infrastructure · Technology",
    description:
      "A focused digital home for technical capability, translating complex infrastructure into a clear and credible presence.",
    url: "https://menamdc.vercel.app",
    theme: "menam-dc",
    background: "#112d31",
    foreground: "#d8f1ec",
  },
  {
    name: "Menam Mechanika",
    category: "Engineering · Industrial systems",
    description:
      "An industrial venture shaped around mechanical intelligence, durable systems, and the beauty of things that work properly.",
    url: "https://menammechanika.vercel.app",
    theme: "menam-mechanika",
    background: "#55564f",
    foreground: "#f1ead5",
  },
  {
    name: "Miracles369",
    category: "Natural energy · Wellbeing",
    description:
      "Accessible tools for creating a more intentional ambient energy — a softer calibration layer for everyday spaces and rituals.",
    url: "https://miracles369-store.com",
    theme: "miracles",
    background: "#593d49",
    foreground: "#fff1df",
  },
];

const grid = document.querySelector("#project-grid");
const projectCount = document.querySelector("#project-count");

projectCount.textContent = String(projects.length).padStart(2, "0");

grid.innerHTML = projects
  .map(
    (project, index) => `
      <a
        class="project-card reveal"
        href="${project.url}"
        target="_blank"
        rel="noreferrer"
        style="--card-bg: ${project.background}; --card-ink: ${project.foreground}"
        aria-label="Visit ${project.name}"
      >
        <div class="project-art art-${project.theme}" aria-hidden="true"></div>
        <div class="project-top">
          <p class="project-index">${String(index + 1).padStart(2, "0")}</p>
          <p class="project-status">Active</p>
        </div>
        <div class="project-content">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </div>
        <div class="project-meta">
          <p class="project-category">${project.category}</p>
          <span class="project-visit" aria-hidden="true">↗</span>
        </div>
      </a>
    `,
  )
  .join("");

document.querySelector("#year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px" },
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;
  observer.observe(element);
});
