const projects = [
  {
    name: "Flowstable",
    type: "Community and conversations",
    description:
      "A Bangkok community built around honest conversations on life, business, and investment.",
    contribution: "Founded by Mac",
    url: "https://flowstable.vercel.app",
    theme: "flowstable",
    image: "./assets/images/flowstable-table.webp",
    icon: "community",
    followers: 1600,
    followerLabel: "Facebook followers",
    background: "#d9551f",
    foreground: "#fff7e8",
  },
  {
    name: "Fengshui Balance",
    type: "Spatial advisory",
    description:
      "A precise feng shui practice grounded in the real property, its timing, and the people who use it.",
    contribution: "Strategy and digital direction",
    url: "https://fengshuibalance.vercel.app",
    theme: "fengshui",
    image: "./assets/images/fengshui-coming-home.webp",
    icon: "compass",
    followers: 150000,
    followerLabel: "Facebook followers",
    facebook: "https://www.facebook.com/fengshuibalance",
    background: "#d9d2bd",
    foreground: "#173329",
  },
  {
    name: "Aviva Spirit",
    type: "Sacred architecture",
    description:
      "Modern marble spirit houses that bring heritage and craftsmanship into contemporary homes.",
    contribution: "Brand and growth",
    url: "https://avivaspirit.com",
    theme: "aviva",
    image: "./assets/images/aviva-press-feature.webp",
    icon: "architecture",
    followerLabel: "View live Facebook community",
    facebook: "https://www.facebook.com/Avivaspirit/",
    background: "#846a61",
    foreground: "#fff8ef",
  },
  {
    name: "MENAM DC",
    type: "Fulfillment and logistics",
    description:
      "A connected warehouse and fulfillment service for modern B2B and B2C commerce.",
    contribution: "Digital positioning",
    url: "https://menamdc.vercel.app",
    theme: "menam-dc",
    image: "./assets/images/menam-visit.webp",
    icon: "warehouse",
    background: "#0c3f49",
    foreground: "#ecffff",
  },
  {
    name: "MENAM Mechanika",
    type: "Warehouse automation",
    description:
      "Engineering and automation systems that strengthen the physical backbone of business.",
    contribution: "Digital positioning",
    url: "https://menammechanika.vercel.app",
    theme: "menam-mechanika",
    image: "./assets/images/menam-mechanika-team.webp",
    icon: "mechanika",
    background: "#5c5d54",
    foreground: "#f8efd4",
  },
  {
    name: "Miracles369",
    type: "Natural energy and wellbeing",
    description:
      "Everyday tools for creating a calmer and more intentional atmosphere at home.",
    contribution: "Brand and digital direction",
    url: "https://miracles369-store.com",
    theme: "miracles",
    image: "./assets/images/aviva-family.webp",
    icon: "energy",
    background: "#5b3d48",
    foreground: "#fff3df",
  },
];

const galleryItems = [
  {
    image: "./assets/images/flowstable-table.webp",
    title: "A shared table",
    caption: "FLOW'S TABLE",
    position: "center 58%",
  },
  {
    image: "./assets/images/flowstable-group.webp",
    title: "The people in the room",
    caption: "FLOW'S TABLE",
    position: "center 40%",
  },
  {
    image: "./assets/images/flowstable-conversation.webp",
    title: "Ideas across the table",
    caption: "FLOW'S TABLE",
    position: "center 50%",
  },
  {
    image: "./assets/images/community-team.webp",
    title: "A community behind the work",
    caption: "Team gathering",
    position: "center 46%",
  },
  {
    image: "./assets/images/community-space.webp",
    title: "Authentic workshops",
    caption: "FLOW'S TABLE",
    position: "center 58%",
  },
  {
    image: "./assets/images/aviva-family-four.webp",
    title: "A family-built foundation",
    caption: "Aviva Spirit",
    position: "center 45%",
  },
  {
    image: "./assets/images/aviva-kbank.webp",
    title: "A story carried forward",
    caption: "Aviva Spirit press",
    position: "center 46%",
  },
  {
    image: "./assets/images/aviva-local-talk.webp",
    title: "Heritage in a modern form",
    caption: "Local Talk feature",
    position: "center 45%",
  },
  {
    image: "./assets/images/menam-visit.webp",
    title: "Welcoming distinguished guests",
    caption: "MENAM Distribution Center",
    position: "center 48%",
  },
];

const socialChannels = [
  {
    label: "Facebook",
    handle: "Mac Nattapong",
    href: "https://facebook.com/macnp369",
    icon: "facebook",
  },
  {
    label: "Instagram",
    handle: "@macnp",
    href: "https://instagram.com/macnp",
    icon: "instagram",
  },
  {
    label: "LINE",
    handle: "ID: mac_np",
    href: "https://line.me/ti/p/PvJM_Mfm7V",
    icon: "line",
  },
  {
    label: "Gmail",
    handle: "mac.ntp@gmail.com",
    href: "mailto:mac.ntp@gmail.com",
    icon: "mail",
  },
];

const iconMarkup = {
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 8.1h2.4V4.4c-.4-.1-1.9-.2-3.5-.2-3.5 0-5.8 2.1-5.8 6v3.3H3.4v4.2h3.9V24h4.8v-6.3h4l.6-4.2h-4.6v-2.9c0-1.2.3-2.5 2.1-2.5Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.7" r="1"/></svg>',
  line:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.2 10.4c0-4.2-4.1-7.7-9.2-7.7s-9.2 3.5-9.2 7.7c0 3.8 3.4 7 8 7.6.3.1.7.2.8.5.1.3.1.7 0 1l-.2 1.2c-.1.4-.3 1.5 1.3.8 1.6-.7 8.5-5 8.5-11.1Z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
};

const grid = document.querySelector("#project-grid");

const projectIcons = {
  community:
    '<svg viewBox="0 0 24 24"><circle cx="8" cy="9" r="3"/><circle cx="16.5" cy="8" r="2.5"/><path d="M2.5 19c.4-4 2.3-6 5.5-6s5.1 2 5.5 6M14 13c3.8-.6 6.5 1.5 7 5"/></svg>',
  compass:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z"/></svg>',
  architecture:
    '<svg viewBox="0 0 24 24"><path d="M4 20V9l8-6 8 6v11M8 20v-7h8v7M2 20h20"/></svg>',
  warehouse:
    '<svg viewBox="0 0 24 24"><path d="m3 9 9-5 9 5v11H3V9Z"/><path d="M7 20v-7h10v7M7 9h.01M12 9h.01M17 9h.01"/></svg>',
  mechanika:
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg>',
  energy:
    '<svg viewBox="0 0 24 24"><path d="m12 3 8 17H4L12 3Z"/><circle cx="12" cy="14" r="2.5"/></svg>',
};

grid.innerHTML = projects
  .map(
    (project, index) => `
      <article
        class="project-card reveal project-${project.theme}"
        style="--card-bg: ${project.background}; --card-ink: ${project.foreground}; --project-image: url('${project.image}')"
      >
        <a
          class="project-visual"
          href="${project.url}"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit ${project.name}"
        >
          <img src="${project.image}" alt="" loading="lazy" />
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
          <span class="project-open" aria-hidden="true">&nearr;</span>
        </a>
        <div class="project-overlay">
          <div class="project-type-row">
            <span class="project-icon">${projectIcons[project.icon]}</span>
            <p class="project-type">${project.type}</p>
          </div>
          <h3>
            <a href="${project.url}" target="_blank" rel="noreferrer">
              ${project.name}
            </a>
          </h3>
          <p class="project-description">${project.description}</p>
          ${
            project.facebook
              ? `<a
                  class="project-followers"
                  href="${project.facebook}"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="${project.name} on Facebook"
                >
                  ${
                    project.followers
                      ? `<strong class="counter" data-count="${project.followers}">0</strong>`
                      : `<strong class="live-pulse"><i></i>LIVE</strong>`
                  }
                  <span>${project.followerLabel}</span>
                  <b aria-hidden="true">&nearr;</b>
                </a>`
              : project.followers
                ? `<p class="project-followers">
                    <strong class="counter" data-count="${project.followers}">0</strong>
                    <span>${project.followerLabel}</span>
                  </p>`
                : ""
          }
          <p class="project-contribution">${project.contribution}</p>
        </div>
      </article>
    `,
  )
  .join("");

const gallery = document.querySelector("#gallery-track");

gallery.innerHTML = galleryItems
  .map(
    (item, index) => `
      <figure class="gallery-item">
        <div class="gallery-image">
          <img
            src="${item.image}"
            alt="${item.title}"
            loading="lazy"
            style="object-position: ${item.position}"
          />
          <span>${String(index + 1).padStart(2, "0")}</span>
        </div>
        <figcaption>
          <strong>${item.title}</strong>
          <span>${item.caption}</span>
        </figcaption>
      </figure>
    `,
  )
  .join("");

const socialGrid = document.querySelector("#social-grid");

socialGrid.innerHTML = socialChannels
  .map(
    (channel) => `
      <a
        class="social-card"
        href="${channel.href}"
        ${channel.href.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}
      >
        <span class="social-icon">${iconMarkup[channel.icon]}</span>
        <span class="social-copy">
          <strong>${channel.label}</strong>
          <span>${channel.handle}</span>
        </span>
        <span class="social-arrow" aria-hidden="true">&nearr;</span>
      </a>
    `,
  )
  .join("");

const animateCounter = (element, startRatio = 0) => {
  const target = Number(element.dataset.count);
  const initial = Math.round(target * startRatio);
  const duration = startRatio > 0 ? 650 : 1100;
  const start = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(
      initial + (target - initial) * eased,
    ).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
};

if (window.matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
    });
    card.addEventListener("pointerenter", () => {
      const counter = card.querySelector(".counter");
      if (counter) animateCounter(counter, 0.94);
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const revealAll = () =>
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px" },
  );

  requestAnimationFrame(() => {
    document.querySelectorAll(".reveal").forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
      revealObserver.observe(element);
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll("nav a[href^='#']")];
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      });
    },
    { rootMargin: "-35% 0px -55%" },
  );
  sections.forEach((section) => navObserver.observe(section));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll(".counter").forEach((counter) => {
    counterObserver.observe(counter);
  });
} else {
  revealAll();
  document.querySelectorAll(".counter").forEach(animateCounter);
}

const scrollProgress = document.querySelector(".scroll-progress span");
const updateScrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
  scrollProgress.style.transform = `scaleX(${progress})`;
};
window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

const scrollGallery = (direction) => {
  const item = gallery.querySelector(".gallery-item");
  if (!item) return;
  gallery.scrollBy({
    left: direction * (item.getBoundingClientRect().width + 16),
    behavior: "smooth",
  });
};

document
  .querySelector("[data-gallery-prev]")
  .addEventListener("click", () => scrollGallery(-1));
document
  .querySelector("[data-gallery-next]")
  .addEventListener("click", () => scrollGallery(1));

let isDragging = false;
let dragStart = 0;
let scrollStart = 0;

gallery.addEventListener("pointerdown", (event) => {
  isDragging = true;
  dragStart = event.clientX;
  scrollStart = gallery.scrollLeft;
  gallery.classList.add("is-dragging");
  gallery.setPointerCapture(event.pointerId);
});
gallery.addEventListener("pointermove", (event) => {
  if (!isDragging) return;
  gallery.scrollLeft = scrollStart - (event.clientX - dragStart);
});
const stopDragging = () => {
  isDragging = false;
  gallery.classList.remove("is-dragging");
};
gallery.addEventListener("pointerup", stopDragging);
gallery.addEventListener("pointercancel", stopDragging);

if (window.matchMedia("(pointer: fine)").matches) {
  const parallax = document.querySelector("[data-parallax]");
  parallax.addEventListener("pointermove", (event) => {
    const rect = parallax.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    parallax.style.setProperty("--rx", `${-y * 2.5}deg`);
    parallax.style.setProperty("--ry", `${x * 2.5}deg`);
  });
  parallax.addEventListener("pointerleave", () => {
    parallax.style.setProperty("--rx", "0deg");
    parallax.style.setProperty("--ry", "0deg");
  });
}
