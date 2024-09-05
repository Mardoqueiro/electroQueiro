<template>
    
  
  <!-- ============ HEADER =========== -->
  <header class="header" id="header">
        <nav class="nav container">
          <a href="/" class="nav__logo">
            <i class="ri-steering-2-line"></i>
            Electro Quéiro
          </a>
  
          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
                <router-link to="/" class="nav__link active-link"><span>Home</span></router-link>
              </li>
              <li class="nav__item">
                <a href="/about" class="nav__link"><span>About</span></a>
              </li>
              <li class="nav__item">
                <a href="/products" class="nav__link"><span>Cars</span></a>
              </li>
              <li class="nav__item">
                <a href="/checkout" class="nav__link"><span>Cart</span></a>
              </li>
              <li class="nav__item">
                <a href="/admin" class="nav__link"><span>Admin</span></a>
              </li>
              <li class="nav__item">
                <a href="/contactus" class="nav__link"><span>Contact Us</span></a>
              </li>
              <li class="nav__item">
                <a href="/signup" class="nav__link"><span>Us</span></a>
              </li>
              <ul class="userAccount navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/logout">Logout</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Register</router-link>
            </li>
          </ul>
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

  <style scoped>
  span {
  position: relative;
}

span::before, span::after {
  content: '';
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