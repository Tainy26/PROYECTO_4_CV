import "./Portfolio.css";
import { portfolioList } from "../../data/portfolio";

const techImages = {
  HTML5: "/icons/html.webp",
  CSS3: "/icons/css.webp",
  JavaScript: "/icons/javascript.webp",
  React: "/icons/react.webp",
  NodeJS: "/icons/nodejs.svg",
};

const linkIcons = {
  github: {
    light: "/icons/github-mark.webp",
    dark: "/icons/github-mark-white.webp"
  },
  link: {
    light: "/icons/link.webp",
    dark: "/icons/link-white.webp"
  }
};

export const Portfolio = () => {
  const portfolioHTML = portfolioList.map(project => {
    const techIcons = project.tech.map(tech => {
      const imageSrc = techImages[tech];
      return imageSrc
        ? `<img src="${imageSrc}" alt="${tech}" title="${tech}" class="tech-icon" />`
        : '';
    }).join("");

    const linkHTML = ` 
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener">
          <img 
            class="theme-image link-icon"
            src="${linkIcons.github.light}"
            data-light="${linkIcons.github.light}"
            data-dark="${linkIcons.github.dark}"
            alt="GitHub"
          />
        </a>` : ''}

      ${project.link ? `
        <a href="${project.link}" target="_blank" rel="noopener">
          <img 
            class="theme-image link-icon"
            src="${linkIcons.link.light}"
            data-light="${linkIcons.link.light}"
            data-dark="${linkIcons.link.dark}"
            alt="Live Project"
          />
        </a>` : ''}
    `;

    return `
      <div class="project-item">
        <h2>${project.title}</h2>
        <div class="sources">
          <img src="${project.image}" alt="${project.title}" />
          <div class="external-sources">
            <div class="techs">
              ${techIcons}
            </div>
            <div class="project-links">
              ${linkHTML}
            </div>
          </div>
        </div>
        <p>${project.description}</p>
      </div>
    `;
  }).join('');

  return `
    <section id="portfolio">
      <div class="portfolio-container">
        ${portfolioHTML}
      </div>
    </section>
  `;
};
