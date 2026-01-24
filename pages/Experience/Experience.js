import "./Experience.css"
import { experienceList } from "../../data/experience";


export const Experience = () => {
  const experienceHTML = experienceList.map(experience => `
      <div class="experience-item">
          <div class="top-content">
            <h3>${experience.date}</h3>
            <div class="logos">
            ${experience.logos.map(logo => `
              <a href="${logo.web}" target="_blank" rel="noopener noreferrer">
              <img src="${logo.src}" alt="${logo.alt}"/>
              </a>`).join('')}
            </div>
            </div>
          <h1>${experience.position} at ${experience.company}</h1>
          <p>${experience.description}</p>
          <ul>
            ${experience.competencies.map(c => `<li>${c}</li>`).join('')}
          </ul>
      </div>
  `).join('');

  return `
    <section id="experience">
              <div class="experience-container">
                ${experienceHTML}
              </div>
    </section>
  `;
};
