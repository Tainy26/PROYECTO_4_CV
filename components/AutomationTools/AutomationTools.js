import "../../pages/About/About.css";
import { automationToolsList } from "../../data/automationtools";

export const AutomationTool = () => {
  const automationToolsHTML = automationToolsList.map(automationTool => `
                <li class="${automationTool.title}">
                <img class="${automationTool.title}" src="${automationTool.logo}" alt="${automationTool.title}"/>
                </li>
  `).join('');

  return `
    <div id="automationTools">
            <div class="knowledge-container">
                <h1><span>$</span><span>{</span>Automation - Tools<span>( )</span><span>}</span></h1>
                <ul class="tech-list">
                ${automationToolsHTML}
                </ul>
            </div>
    </div>
  `;
};