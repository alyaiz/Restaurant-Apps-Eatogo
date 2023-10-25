import logo from '../../public/eatogo.png';

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <div class="footer-box">
        <div class="footer-card footer-desc">
          <img src="${logo}" alt="logo eatogo" tabindex="0"/>
          <p class="footer-text" tabindex="0">
            Eatogo adalah aplikasi pencarian restoran yang memudahkan pengguna
            dalam menemukan restoran terbaik berdasarkan lokasi, ulasan, dan
            rating.
          </p>
        </div>
        <div class="footer-nav-menu">
          <h4 class="card-title" tabindex="0">Chortcut</h4>
          <a href="#/main">Home</a>
          <a href="#/favorite">Favorite</a>
          <a href="https://github.com/alyaiz" target="_blank">About Us</a>
        </div>
        <div class="footer-nav-menu">
          <h4 class="card-title" tabindex="0">Contact</h4>
          <a href="#">Email</a>
          <a href="#">Instagram</a>
        </div>
        <div class="footer-nav-menu">
          <h4 class="card-title" tabindex="0">Address</h4>
          <p class="card-text" tabindex="0">Tuban</p>
          <p class="card-text" tabindex="0">Indonesia</p>
        </div>
      </div>
      <div class="copyright" tabindex="0">copyright © 2023 - Eatog</div>
    </footer>
    `;
  }
}

customElements.define('end-bar', Footer);
