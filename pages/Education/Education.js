import "./Education.css";
import { educationList } from "../../data/education";

export const Education = () => {
  const educationHTML = educationList.map(education => `
    <div class="education-item">
      <div class="top-content">
        <h3>${education.date}</h3>
        <a href="${education.web}" target="_blank" rel="noopener noreferrer">
          <img 
            class="theme-image education-logo"
            src="${education.logo.light}"
            data-light="${education.logo.light}"
            data-dark="${education.logo.dark}"
            alt="${education.institution} logo"
          />
        </a>
      </div>
      <h1>${education.degree} at ${education.institution}</h1>
      <p>${education.description}</p>
    </div>
  `).join('');

  return `
    <section id="education">
      <div class="education-container">
        ${educationHTML}
      </div>
    </section>
  `;
};
