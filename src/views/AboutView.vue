<template>
  <main class="main">
      <section class="about__content">
      <h1>About Luxury Wheels</h1>
      <p>Luxury Wheels is more than just a car dealership; we're a visionary company committed to transforming the automotive landscape in South Africa and across the African continent.</p>
      
      <h2>Our Vision</h2>
      <p>At Luxury Wheels, we envision a future where premium automotive experiences are accessible to a broader range of discerning customers throughout Africa. We aim to be at the forefront of this transformation, bridging the gap between luxury aspirations and attainable reality.</p>
      
      <h2>South African Roots, Pan-African Dreams</h2>
      <p>Founded in South Africa, we're proud of our heritage and deeply committed to the development of our local automotive industry. However, our ambitions extend beyond borders. We see South Africa as a springboard to revolutionize the luxury car market across the entire African continent.</p>
      
      <h2>Empowering African Economies</h2>
      <p>We believe that a thriving luxury automotive sector can significantly contribute to economic growth. By fostering partnerships with local businesses, investing in skills development, and creating job opportunities, we're playing our part in building a more prosperous Africa.</p>
      
      <h2>Sustainability and Innovation</h2>
      <p>As we look to the future, we're dedicated to promoting sustainable luxury. This means not only offering the latest in electric and hybrid vehicles but also implementing eco-friendly practices in our operations. We're committed to reducing our carbon footprint while delivering unparalleled automotive excellence.</p>
      
      <h2>Customer-Centric Approach</h2>
      <p>Our success is built on understanding and exceeding the unique needs of our African clientele. We offer personalized services, flexible financing options, and after-sales support tailored to the specific challenges and opportunities of the African market.</p>
      
      <h2>Building Communities</h2>
      <p>Luxury Wheels is more than a business; we're a community builder. Through various CSR initiatives, we're actively involved in education, road safety awareness, and environmental conservation projects across Africa.</p>
      
      <h2>Join Our Journey</h2>
      <p>As we continue to grow and expand our presence across Africa, we invite you to be part of our exciting journey. Experience the Luxury Wheels difference – where African pride meets global luxury standards.</p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutView',
  components: {
  }
}
</script>

<style scoped>
.main {
  padding: 2rem 1rem;
  background-color: var(--container-color);
  color: var(--text-color);
  
}

.about__container {
  display: grid;
  gap: 2rem;
}

.about__group {
  position: relative;
}

.about__img {
  width: 100%;
  border-radius: 0.5rem;
}

.about__card {
  width: 180px;
  position: absolute;
  right: 0;
  bottom: -2.5rem;
  background-color: hsla(0, 0%, 100%, .1);
  backdrop-filter: blur(16px);
  padding: 1rem 0.75rem;
  text-align: center;
  border-radius: 1.25rem;
}

.about__card-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.about__card-description {
  font-size: 0.75rem;
}

.about__title {
  text-align: initial;
  margin-bottom: 2rem;
}

.about__description {
  margin-bottom: 2rem;
}

.button {
  display: inline-block;
  background-color: var(--first-color);
  color: var(--white-color);
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: .3s;
}

.button:hover {
  background-color: var(--first-color-alt);
}

.about__content {
  margin-top: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.about__content h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--title-color);
}

.about__content h2 {
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--title-color);
}

.about__content p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

@media (min-width: 768px) {
  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .about__card {
    left: 0;
    right: initial;
  }

  .about__title {
    text-align: initial;
  }

  .about__description {
    padding-right: 2rem;
  }
}

@media (min-width: 1024px) {
  .main {
    padding: 4rem 2rem;
  }

  .about__container {
    column-gap: 6rem;
  }

  .about__group {
    padding-left: 1rem;
  }

  .about__img {
    width: 380px;
  }

  .about__card {
    width: 260px;
    padding: 2rem 1.5rem;
    bottom: -5rem;
  }

  .about__card-title {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }

  .about__card-description {
    font-size: 0.875rem;
  }

  .about__title {
    margin-bottom: 3rem;
  }

  .about__description {
    margin-bottom: 3rem;
  }
}
</style>