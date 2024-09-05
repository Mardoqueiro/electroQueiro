<template>
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, nextTick } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import mixitup from 'mixitup';
import ScrollReveal from 'scrollreveal';

export default {
  components: {
    NavBar,
    Footer
  },
  setup() {
    const initMenuToggle = () => {
      const navToggle = document.getElementById('nav-toggle');
      const navMenu = document.getElementById('nav-menu');
      const navClose = document.getElementById('nav-close');

      if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
        });
      }

      if (navClose && navMenu) {
        navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
        });
      }
    };

    const initScrollHeader = () => {
      const header = document.getElementById('header');
      if (header) {
        window.addEventListener('scroll', () => {
          if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
          } else {
            header.classList.remove('scroll-header');
          }
        });
      }
    };

    const initSwiper = () => {
      const swiperContainer = document.querySelector('.popular__container');
      if (swiperContainer) {
        new Swiper(swiperContainer, {
          loop: true,
          spaceBetween: 24,
          slidesPerView: 'auto',
          grabCursor: true,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
          breakpoints: {
            768: {
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 48,
            },
          },
        });
      }
    };

    const initMixitup = () => {
      const featuredContent = document.querySelector('.featured__content');
      if (featuredContent) {
        mixitup(featuredContent, {
          selectors: {
            target: '.featured__card',
          },
          animation: {
            duration: 300,
          },
        });

        const linkFeatured = document.querySelectorAll('.featured__item');
        linkFeatured.forEach((l) =>
          l.addEventListener('click', function () {
            linkFeatured.forEach((l) => l.classList.remove('active-featured'));
            this.classList.add('active-featured');
          })
        );
      }
    };

    const initScrollUp = () => {
      const scrollUp = document.getElementById('scroll-up');
      if (scrollUp) {
        window.addEventListener('scroll', () => {
          if (window.scrollY >= 350) {
            scrollUp.classList.add('show-scroll');
          } else {
            scrollUp.classList.remove('show-scroll');
          }
        });
      }
    };

    const initScrollActive = () => {
      const sections = document.querySelectorAll('section[id]');
      if (sections.length > 0) {
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;

          sections.forEach((current) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 58;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
              const activeLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
              if (activeLink) activeLink.classList.add('active-link');
            } else {
              const inactiveLink = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
              if (inactiveLink) inactiveLink.classList.remove('active-link');
            }
          });
        });
      }
    };

    const initScrollReveal = () => {
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true,
      });

      sr.reveal(
        `.home__title, .popular__container, .features__img, .featured__filters`
      );
      sr.reveal(`.home__subtitle`, { delay: 500 });
      sr.reveal(`.home__elec`, { delay: 600 });
      sr.reveal(`.home__img`, { delay: 800 });
      sr.reveal(`.home__car-data`, {
        delay: 1000,
        interval: 100,
        origin: 'bottom',
      });
      sr.reveal(`.home__button`, { delay: 100, interval: 100, origin: 'bottom' });
      sr.reveal(`.about__group, .offer__data`, { origin: 'left' });
      sr.reveal(`.about__data, .offer__img`, { origin: 'right' });
      sr.reveal(`.features__map`, { delay: 600, origin: 'bottom' });
      sr.reveal(`.features__card`, { interval: 300 });
      sr.reveal(`.featured__card, .logos__content, .footer__content`, {
        interval: 100,
      });
    };

    onMounted(() => {
      nextTick(() => {
        initMenuToggle();
        initScrollHeader();
        initSwiper();
        initMixitup();
        initScrollUp();
        initScrollActive();
        initScrollReveal();
      });
    });
  },
};
</script>

<style src="@/assets/css/style.css">
</style>