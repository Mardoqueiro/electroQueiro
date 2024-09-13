<template>
  <main class="main">
    <!-- ============= HOME ============ -->
    <div class="shape shape__big"></div>
    <div class="shape shape__small"></div>

    <section class="home section" id="home">
      <div class="home__container container grid">
        <div class="home__data">
          <h1 class="home__title">Choose The Best Car</h1>

          <h2 class="home__subtitle">Porsche Mission E</h2>

          <h3 class="home__elec">
            <i class="ri-flashlight-fill"></i>
            Electric Car
          </h3>
        </div>
        <!-- <div class="row">
            <h4 class="display-4">Recent cars</h4>
          </div> -->
        <div>
          <Spinner />
        </div>

        <img
          src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/home.png"
          alt=""
          class="home__img"
        />

        <div class="home__car">
          <div class="home__car-data">
            <div class="home__car-icon">
              <i class="ri-temp-cold-line"></i>
            </div>
            <h2 class="home__car-number">24°</h2>
            <h3 class="home__car-name">TEMPERATURE</h3>
          </div>

          <div class="home__car-data">
            <div class="home__car-icon">
              <i class="ri-dashboard-3-line"></i>
            </div>
            <h2 class="home__car-number">873</h2>
            <h3 class="home__car-name">MILEAGE</h3>
          </div>

          <div class="home__car-data">
            <div class="home__car-icon">
              <i class="ri-flashlight-fill"></i>
            </div>
            <h2 class="home__car-number">94%</h2>
            <h3 class="home__car-name">BATTERY</h3>
          </div>
        </div>

        <a href="#" class="home__button" @click.prevent="playStartSound">START</a>
      </div>
    </section>

    <!-- ======== ABOUT ============= -->
    <section class="about section" id="about">
      <div class="about__container container grid">
        <div class="about__group">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/about.png"
            alt="Luxury car"
            class="about__img"
          />
          <div class="about__card">
            <h3 class="about__card-title">2,500+</h3>
            <p class="about__card-description">
              Supercharges places along popular routes
            </p>
          </div>
        </div>

        <div class="about__data">
          <h2 class="section__title about__title">
            Machines with <br />
            Future Technology
          </h2>

          <p class="about__description">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with
            new and innovative platforms that last a long time.
          </p>

          <a href="/about" class="button">Know more</a>
        </div>
      </div>
    </section>

     <!-- ======== FEATURES ============= -->
     <section class="features section">
        <h2 class="section__title">More Features</h2>

        <div class="features__container container grid">
          <div class="features__group">
            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/features.png"
              alt=""
              class="features__img"
            />
            <div class="features__card features__card-1">
              <h3 class="features__card-title">800v</h3>
              <p class="features__card-description">Turbo <br />Chargin</p>
            </div>

            <div class="features__card features__card-2">
              <h3 class="features__card-title">350</h3>
              <p class="features__card-description">
                Km <br />
                Range
              </p>
            </div>

            <div class="features__card features__card-3">
              <h3 class="features__card-title">480</h3>
              <p class="features__card-description">
                Km <br />
                Travel
              </p>
            </div>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/d695ce21f8309425a8a0ccc64f49408848b04b4b/assets/img/map.svg  "
          alt=""
          class="features__map"
        />
      </section>

    <!-- ========== POPULAR =========== -->
    <section class="popular section" id="popular">
      <h2 class="section__title">
        Choose Your Electric Car <br />
        Of The Porsche Brand
      </h2>

      <div class="popular__container container swiper">
        <div class="swiper-wrapper">
          <article class="popular__card swiper-slide">
            <div class="shape__smaller"></div>
            <h1 class="popular__title">Porsche</h1>
            <h3 class="popular__subtitle">Turbo S</h3>

            <img
              src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/popular1.png"
              alt=""
              class="popular__img"
            />

            <div class="popular__data">
              <div class="popular__data-group">
                <i class="ri-dashboard-3-line"></i> 3.7Sec
              </div>

              <div class="popular__data-group">
                <i class="ri-funds-box-line"></i> 356 Km/h
              </div>

              <div class="popular__data-group">
                <i class="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 class="popular__price">$175,900</h3>

            <button class="button popular__button">
              <i class="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <!-- <div v-if="recentProducts && recentProducts.length > 0" class="row gap-2 justify-content-center">
            <Card v-for="product in recentProducts" :key="product.productID">
              <template #cardHeader>
                <img
                  :src="product.prodURL"
                  loading="lazy"
                  class="img-fluid"
                  :alt="product.prodName"
                />
              </template>
              <template #cardBody>
                <h5 class="card-title fw-bold">{{ product.prodName }}</h5>
                <p class="lead">{{ product.prodDescription }}</p>
                <p class="lead">
                  <span class="text-success fw-bold">Amount</span>: R{{
                    product.amount
                  }}
                </p>
              </template>
            </Card>
          </div>
          <div v-else>
            <Spinner />
          </div> -->
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <!-- =========== OFFER ================ -->
    <section class="offer section">
      <div class="offer__container container grid">
        <img
          src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/offer-bg.png"
          alt=""
          class="offer__bg"
        />

        <div class="offer__data">
          <h2 class="section__title offer__title">
            Do You Want To Receive <br />
            Special Offers?
          </h2>

          <p class="offer__description">
            Be the first to receive all the information about our products and
            new cars by email by subscribing to our mailing list.
          </p>

          <a href="#" class="button"> Subscribe Now </a>
        </div>

        <img
          src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/offer.png"
          alt=""
          class="offer__img"
        />
      </div>
    </section>

    <!-- ==================== LOGOS ============= -->
    <section class="logos section">
      <div class="logos__container container grid">
        <div class="logos__content">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo1.png"
            alt=""
            class="logos__img"
          />
        </div>

        <div class="logos__content">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo2.png"
            alt=""
            class="logos__img"
          />
        </div>

        <div class="logos__content">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo3.png"
            alt=""
            class="logos__img"
          />
        </div>

        <div class="logos__content">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo4.png"
            alt=""
            class="logos__img"
          />
        </div>

        <div class="logos__content">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo5.png"
            alt=""
            class="logos__img"
          />
        </div>

        <div class="logos__content">
          <img
            src="https://raw.githubusercontent.com/bedimcode/responsive-car-website/main/assets/img/logo6.png"
            alt=""
            class="logos__img"
          />
        </div>
      </div>
    </section>

    <!-- ========= SCROLL UP ============= -->
    <a href="#" class="scrollup" id="scroll-up" @click.prevent="scrollToTop" v-show="showScrollUp">
      <i class="ri-arrow-up-line"></i>
    </a>
  </main>
</template>

<script>
// import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "HomeView",
  components: {
    // Card,
    Spinner,
  },
  data() {
    return {
      startSound: new Audio(require('../assets/audio/utomp3.com - Porsche Taycan exhaust sound revs start up sound Porsche Electric Sport Sound-[AudioTrimmer.com].mp3')),
      showScrollUp: false,
    }
  },
  methods: {
    playStartSound() {
      this.startSound.play();
      // Add any other actions you want to perform when START is clicked
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    toggleScrollUp() {
      this.showScrollUp = window.scrollY > 200;
    },
  },
  computed: {
    recentProducts() {
      console.log("Computed recentProducts:", this.$store.state.recentProducts);
      return this.$store.state.recentProducts;
    },
  },
  mounted() {
    console.log("Mounting component, dispatching fetchProducts");
    this.$store.dispatch("fetchProducts");
    window.addEventListener('scroll', this.toggleScrollUp);
  },
  unmounted() {
    window.removeEventListener('scroll', this.toggleScrollUp);
  },
  created() {
    console.log("Initial recentProducts:", this.recentProducts);
  },
  updated() {
    console.log("Updated recentProducts:", this.recentProducts);
  },
};
</script>

<style scoped>
main {
  padding: 2rem 0;
  background-color: var(--container-color);
  color: var(--text-color);
}

.scrollup {
  position: fixed;
  right: 1rem;
  bottom: -20%;
  background-color: var(--first-color);
  padding: 0.5rem;
  border-radius: 0.4rem;
  transition: .4s;
  z-index: 10;
}

.scrollup:hover {
  background-color: var(--first-color-alt);
}

.scrollup i {
  color: #fff;
  font-size: 1.2rem;
}
</style>