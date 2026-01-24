import "../../pages/About/About.css";
import { cloudDevOpsList } from "../../data/clouddevops";

export const CloudDevOps = () => {
  const cloudDevOpsHTML = cloudDevOpsList.map(clouddevop => `
                <li class="${clouddevop.title}">
                <img class="${clouddevop.title}" src="${clouddevop.logo}" alt="${clouddevop.title}"/>
                </li>
  `).join('');

  return `
    <div id="clouddevops">
            <div class="knowledge-container">
                <h1><span>$</span><span>{</span>Cloud - DevOps<span>()</span><span>}</span></h1>
                <ul class="tech-list">
                ${cloudDevOpsHTML}
                </ul>
            </div>
    </div>
  `;
};
