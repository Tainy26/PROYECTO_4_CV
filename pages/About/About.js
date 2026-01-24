import "./About.css";
import { Frontend } from "../../components/Frontend/Frontend";
import { Backend } from "../../components/Backend/Backend";
import { AutomationTool } from "../../components/AutomationTools/AutomationTools";
import { Database } from "../../components/Databases/Databases";
import { CloudDevOps } from "../../components/CloudDevOps/CloudDevOps";

export const About = () => `
  <section id="about">
    <div class="about-container">
      <div class="description">
        <h1>
          <span>&lt;</span>
          I’m Carlos
          <span>&gt;</span>
          <span>&lt;/</span>
          FullStack Developer.
          <span>&gt;</span>
        </h1>
        <p>
          I currently live in <strong>Germany</strong>, where I’m pursuing a <strong>Higher Vocational Training in Web Application Development (DAW)</strong> alongside a <strong>Master’s degree in FullStack Development</strong>. I consider myself <strong>passionate about technology, continuous learning, and creating practical and innovative solutions</strong>. I enjoy taking on <strong>new challenges</strong>, exploring <strong>emerging technologies</strong>, and applying everything I’ve learned to <strong>real-world projects</strong>. I’m especially motivated by <strong>teamwork, idea exchange</strong>, and the opportunity to grow both <strong>technically and personally</strong>. My goal is to keep <strong>evolving as a developer</strong> and <strong>collaborate on projects that make a difference</strong> in the world of software.
        </p>
      </div>
        <section id="knowledge">
        ${Frontend()}
        ${Backend()}
        ${Database()}
        ${CloudDevOps()}
        ${AutomationTool()}
        </section>
    </div>
  </section>
`;
