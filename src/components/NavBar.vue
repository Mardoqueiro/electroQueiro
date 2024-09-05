<template>
    <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Electro Quéiro</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cars">Cars</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/checkout">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contactus">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/admin">Admin</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  
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