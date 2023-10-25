import heroImage from '../../public/hero.jpg';

class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="jumbotron" tabindex="0" aria-label="jumbotron">
        <div
          class="jumbotron"
          style="background-image: url('${heroImage}')"
        >
          <div class="jumbotron-overlay">
            <h1 class="jumbotron-title" tabindex="0">Eatogo</h1>
            <p class="jumbotron-subtitle" tabindex="0">
              Your Ultimate Guide to the Best Restaurants.
            </p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('jumbotron-section', Jumbotron);
