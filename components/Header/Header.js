import "./Header.css"


export const Header = () => `
  <div id="scroll-header" class="header-container">
    <h2>Welcome</h2>
    <div class="right-content">
      <img 
        class="theme-image" 
        id="logo-page"
        data-light="/icons/logo-dark.webp"
        data-dark="/icons/logo-light.webp" 
        src="/icons/logo-dark.webp" 
        alt="Logo"/>

      <img 
        class="theme-image"
        id="theme-toggle"
        data-light="/icons/night-mode.webp"
        data-dark="/icons/light-mode.webp"
        src="/icons/night-mode.webp"
        alt="Night Mode Icon"/>
    </div>
  </div>
`;
