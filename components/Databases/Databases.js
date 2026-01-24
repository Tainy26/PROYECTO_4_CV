import "../../pages/About/About.css";
import { databasesList } from "../../data/databases";

export const Database = () => {
  const databasesHTML = databasesList.map(database => `
                <li class="${database.title}">
                <img class="${database.title}" src="${database.logo}" alt="${database.title}"/>
                </li>
  `).join('');

  return `
    <div id="database">
            <div class="knowledge-container">
                <h1><span>$</span><span>{</span>Databases<span>()</span><span>}</span></h1>
                <ul class="tech-list">
                ${databasesHTML}
                </ul>
            </div>
    </div>
  `;
};
