import "./Navbar.css"

export const Navbar = () => `
 <div id="scroll-nav" class="nav-container">
    <ul class="nav1">
      <li class="home">
        <a href="#app">
        Home
        <img
          class="theme-image" 
          data-light="/icons/right-arrow.webp"
          data-dark="/icons/right-arrow-white.webp" 
          src="/icons/right-arrow.webp" 
          alt="Home"/>
          </a>
      </li>
      <li>
        <a href="#about">
        About
       <img 
          class="theme-image" 
          data-light="/icons/right-arrow.webp"
          data-dark="/icons/right-arrow-white.webp" 
          src="/icons/right-arrow.webp" 
          alt="About"/>
        </a>
      </li>
      <li>
        <a href="#experience">
        Experience
        <img 
          class="theme-image" 
          data-light="/icons/right-arrow.webp"
          data-dark="/icons/right-arrow-white.webp" 
          src="/icons/right-arrow.webp" 
          alt="Experience"/>
        </a>
      </li>
      <li>
        <a href="#education">
        Education
        <img 
          class="theme-image" 
          data-light="/icons/right-arrow.webp"
          data-dark="/icons/right-arrow-white.webp" 
          src="/icons/right-arrow.webp" 
          alt="Education"/>
        </a>
      </li>
      <li>
        <a href="#portfolio">
        Portfolio
        <img 
          class="theme-image" 
          data-light="/icons/right-arrow.webp"
          data-dark="/icons/right-arrow-white.webp" 
          src="/icons/right-arrow.webp" 
          alt="Portfolio"/>
        </a>
      </li>
    </ul>

    <ul class="nav2">
      <li class="home">
        <a href="#app">
        <img
          class="theme-image" 
          data-light="/icons/home.webp"
          data-dark="/icons/home-white.webp" 
          src="/icons/home.webp" 
          alt="Home"/>
          </a>
      </li>
      <li>
        <a href="#about">
       <img 
          class="theme-image" 
          data-light="/icons/about.webp"
          data-dark="/icons/about-white.webp" 
          src="/icons/about.webp" 
          alt="About"/>
        </a>
      </li>
      <li>
        <a href="#experience">
        <img 
          class="theme-image" 
          data-light="/icons/experience.webp"
          data-dark="/icons/experience-white.webp" 
          src="/icons/experience.webp" 
          alt="Experience"/>
        </a>
      </li>
      <li>
        <a href="#education">
        <img 
          class="theme-image" 
          data-light="/icons/education.webp"
          data-dark="/icons/education-white.webp" 
          src="/icons/education.webp" 
          alt="Education"/>
        </a>
      </li>
      <li>
        <a href="#portfolio">
        <img 
          class="theme-image" 
          data-light="/icons/portfolio.webp"
          data-dark="/icons/portfolio-white.webp" 
          src="/icons/portfolio.webp" 
          alt="Portfolio"/>
        </a>
      </li>
    </ul>
  </div>
`;
