<template>
    <!-- ============== FOOTER =============== -->
    <footer class="footer section">
      <div class="shape shape__big"></div>
      <div class="shape shape__small"></div>
      <div class="footer__container container grid">
        <div class="footer__content">
          <a href="" class="footer__logo">
            <i class="ri-steering-line"></i> Electro Quéiro
          </a>
          <p class="footer__description">
            We offer the best electric cars of <br />
            the most recognized brands in <br />
            the world.
          </p>
          <p class="lead">
              EQ &copy; - <span id="currYear"></span> | All Rights Reserved
          </p>
        </div>
        <div class="footer__content">
          <h3 class="footer__title">Company</h3>
          <ul class="footer__links">
            <li>
              <a href="/about" class="footer__link">About</a>
            </li>
            <li>
              <a href="/products" class="footer__link">Cars</a>
            </li>
            <li>
              <a href="#" class="footer__link">History</a>
            </li>
            <li>
              <a href="/checkout" class="footer__link">Shop</a>
            </li>
          </ul>
        </div>
        <div class="footer__content">
          <h3 class="footer__title">Information</h3>
          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">Request a quote</a>
            </li>
            <li>
              <a href="#" class="footer__link">Find a dealer</a>
            </li>
            <li>
              <a href="#" class="footer__link">Contact us</a>
            </li>
            <li>
              <a href="#" class="footer__link">Services</a>
            </li>
          </ul>
        </div>
        <div class="footer__content">
          <h3 class="footer__title">Follow us</h3>
          <ul class="footer__social">
            <a
              href="https://ww.facebook.com/"
              target="_blank"
              class="footer__social-link"
            >
              <i class="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="footer__social-link"
            >
              <i class="ri-instagram-line"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="footer__social-link"
            >
              <i class="ri-twitter-line"></i>
            </a>
          </ul>
        </div>
      </div>
    </footer>

</template>

<script>
export default {
    name: "FooterComp",
    mounted() {
        this.updateCurrentYear();
    },
    methods: {
        updateCurrentYear() {
            const currentYear = new Date().getFullYear();
            document.getElementById('currYear').textContent = currentYear;
        }
    }
}
</script>

<style scoped>
footer {
    padding: 2rem 0;
    background-color: var(--container-color);
    color: var(--text-color);
}

.footer__link {
    text-decoration: none;
}
</style>