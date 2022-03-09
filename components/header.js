class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback() {
    this.innerHTML = `
    <header>
    <div class="header-top-bar">
      
    <img src = "assets/shared/logo.svg" alt="logo"/>
    <button class="nav-toggle">
  </button>
  </div>
    <nav class="navigation-mobile">
      <ul class="list">
        <li class="list__item"><span style="font-weight:bold">00</span> Home</li>
        <li class="list__item"><span style="font-weight:bold">01</span> Destination</li>
        <li class="list__item"><span style="font-weight:bold">02</span> Crew</li>
        <li class="list__item"><span style="font-weight:bold">03</span> Technology</li>
      </ul>
    </nav>
  </header>
    `;

  
  }

}
  // 01 class keyword defines a class
  // 01 class declaration or expression to create a class as child of Header
  // 02 special method of a class for creating and initializing and object instance of that class
  // 03 keyword used to access and call functions on an object's parent


  customElements.define('header-component', Header);