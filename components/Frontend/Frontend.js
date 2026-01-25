import "../../pages/About/About.css";
import { frontendList } from "../../data/frontend";

export const Frontend = () => {
  const frontendHTML = frontendList.map(frontend => `
                <li class="${frontend.title}">
                <img class="${frontend.title}" src="${frontend.logo}" alt="${frontend.title}"/>
                </li>
  `).join('');

  return `
    <div id="frontend">
            <div class="knowledge-container">
                <h1><span>$</span><span>{</span>Frontend<span>( )</span><span>}</span></h1>
                <ul class="tech-list">
                ${frontendHTML}
                </ul>
            </div>
    </div>
  `;
};
