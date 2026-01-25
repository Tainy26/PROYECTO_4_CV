import "../../pages/About/About.css";
import { backendList } from "../../data/backend";

export const Backend = () => {
  const backendHTML = backendList.map(backend => `
                <li class="${backend.title}">
                <img class="${backend.title}" src="${backend.logo}" alt="${backend.title}"/>
                </li>
  `).join('');

  return `
    <div id="backend">
            <div class="knowledge-container">
                <h1><span>$</span><span>{</span>Backend<span>( )</span><span>}</span></h1>
                <ul class="tech-list">
                ${backendHTML}
                </ul>
            </div>
    </div>
  `;
};
