import "./Content.css"
import { About } from "../../pages/About/About";
import {Experience} from "../../pages/Experience/Experience"
import {Education} from "../../pages/Education/Education"
import { Portfolio } from "../../pages/Portfolio/Portfolio";

export const Content = () => `
  <div class="main-container">
    <div class="info-container">
        <div class="container1">
            <img 
              class="theme-image" 
              data-light="/icons/main1.png"
              data-dark="/icons/main2.png" 
              src="/icons/main1.png" 
              alt="Carlos Daniel"/>


              <div class="titles-container">
                <h2>Designer / Developer</h2>
                <h1>Carlos Tapia</h1>
              </div>


              <div class="number-page">
              <p>01</p>
              <a href="#" id="next-page-btn">
              <img 
                class="theme-image" 
                data-light="/icons/page.webp"
                data-dark="/icons/page-black.webp" 
                src="/icons/page.webp" 
                alt="Home"/>
              </a>
              </div>
        </div>

          </div>

          <div class="container2">
              <div class="text-container1">
                <p class="number-container">01</p>
                <h3>UI/UX Design</h3>
                <p>At in proin consequat ut cursus venenatis sapien.</p>
              </div>
              <div class="text-container2">
                <p class="number-container">02</p>
                <h3>UI/UX Design</h3>
                <p>At in proin consequat ut cursus venenatis sapien.</p>
              </div>
              <div class="text-container3">
                <p class="number-container">03</p>
                <h3>UI/UX Design</h3>
                <p>At in proin consequat ut cursus venenatis sapien.</p>
              </div>
          </div>
    </div>
            ${About()}
            ${Experience()}
            ${Education()}
            ${Portfolio()}
  </div>
`;
