import { createToast } from '../utils/notification-initiator';
import logo from '../../public/eatogo.png';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
      <nav>
        <div class="loader-box">
            <a href="index.html">
              <img src="${logo}" alt="logo eatogo" class="logo" />
            </a>
          <div class="loader"></div>
        </div>
      
        <button class="hamburger-menu" aria-label="buka menu">
          <i class="bx bx-menu bx-md"></i>
        </button>

        <div class="nav-menu">
          <a href="#/main">Home</a>
          <a href="#/favorite">Favorite</a>
          <a href="https://github.com/alyaiz" target="_blank">About Us</a>
        </div>

        <form class="form-search">
          <input
            id="input-search"
            class="form-control"
            placeholder="Search name or menu..."
            type="text"
          />
          <button class="button" id="button-search" type="submit">
            Search
          </button>
        </form>

        <div class="dropdown-menu">
          <a href="#/main">Home</a>
          <a href="#/favorite">Favorite</a>
          <a href="https://github.com/alyaiz" target="_blank">About Us</a>

          <form class="form-search form-dropdown">
            <input
              id="input-search-dropdown"
              class="form-control"
              placeholder="Search city..."
              type="text"
            />
            <button
              class="button-search button-dropdown"
              id="button-dropdown"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
    `;

    const buttonSearch = document.querySelector('#button-search');
    const buttonDropdown = document.querySelector('#button-dropdown');

    const handleSearch = (event, inputId) => {
      event.preventDefault();
      const keyword = document.querySelector(inputId).value;
      document.querySelector(inputId).value = '';

      if (keyword.length > 0) {
        const query = `#/search/${keyword}`;
        window.location = window.location.origin + query;
      } else {
        createToast('info', 'Please fill in the search field!');
      }
    };

    buttonSearch.addEventListener('click', (event) => {
      handleSearch(event, '#input-search');
    });

    buttonDropdown.addEventListener('click', (event) => {
      handleSearch(event, '#input-search-dropdown');
    });
  }
}

customElements.define('nav-bar', NavBar);
