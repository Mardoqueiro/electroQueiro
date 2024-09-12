<template>
  <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid" id="navbar">
      <router-link class="navbar-brand" to="/">
        <img
          src=""
          alt="logo"
          class="img-thumbnail"
          loading="lazy"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" aria-current="page">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home"  exact-active-class="active-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"  exact-active-class="active-link" aria-current="page">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products"  exact-active-class="active-link" aria-current="page">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/checkout"  exact-active-class="active-link" aria-current="page">Checkout
                <span class="badge bg-warning rounded-pill" counter>0</span>
            </router-link>
          </li>
          <li v-if="userRole === 'Admin'" class="nav-item">
            <router-link class="nav-link" to="/admin" exact-active-class="active-link" aria-current="page">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact" exact-active-class="active-link" aria-current="page">Contact Info</router-link>
          </li>
          <ul class="userAccount navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" exact-active-class="active-link" aria-current="page">Profile</router-link>
            </li>
          </ul>
      <li><button @click="logout">Logout</button></li>
          
        </ul>
      </div>
    </div>
  </nav> -->

  <!-- ============ HEADER =========== -->
  <header class="header" id="header">
    <nav class="nav container">
      <router-link to="/" class="nav__logo">
        <i class="ri-steering-2-line"></i>
        Electro Quéiro
      </router-link>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link to="/home" class="nav__link active-link"><span>Home</span></router-link>
          </li>
          <li class="nav__item">
            <router-link to="/about" class="nav__link"><span>About</span></router-link>
          </li>
          <li class="nav__item">
            <router-link to="/products" class="nav__link"><span>Cars</span></router-link>
          </li>
          <li class="nav__item">
            <router-link to="/checkout" class="nav__link"><span>Cart</span>
              <span class="badge bg-warning rounded-pill" counter>0</span>
            </router-link>
          </li>
           
          <li v-show="userRole === 'Admin'" class="nav-item">
            <router-link to="/admin" class="nav__link"><span>Admin</span></router-link>
          </li>
          <li class="nav__item">
            <router-link to="/contact" class="nav__link"><span>Contact Us</span></router-link>
          </li>

          <li class="nav__item">
            <router-link to="/signup" class="nav__link"><span>Sign-Up/Login</span></router-link>
          </li>
          <li class="nav__item">
            <router-link to="/login" class="nav__link"><span>Login</span></router-link>
          </li>
          <ul class="userAccount navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/profile" exact-active-class="active-link"
                aria-current="page">Profile</router-link>
            </li>
          </ul>
          <li><button @click="logout">Logout</button></li>
        </ul>

        <div class="nav__close" id="nav-close">
          <i class="ri-close-line"></i>
        </div>
      </div>

      <!-- Toggle button -->
      <div class="nav__toggle" id="nav-toggle">
        <i class="ri-menu-line"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  mounted() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  }
}
</script>

<style scoped>
.nav__link {
  text-decoration: none;
}

.nav__link:hover {
  color: rgb(65, 120, 220);
}

.nav__link:hover::before,
.nav__link:hover::after {
  transform: scaleX(1);
}

.nav__logo {
  text-decoration: none;
}

.nav__logo:hover {
  color: rgb(65, 120, 220);
}

span::before,
span::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background-color: rgb(65, 120, 220);
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

span::before {
  top: 0;
  transform-origin: center right;
}

span:hover::before {
  transform-origin: center left;
  transform: scaleX(1);
}

span::after {
  bottom: 0;
  transform-origin: center left;
}

span:hover::after {
  transform-origin: center right;
  transform: scaleX(1);
}
</style>

