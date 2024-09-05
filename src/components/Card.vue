<template>
  <div class="popular__card">
    <div class="shape__smaller"></div>
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
    <button class="popular__button">
      <i class="bx bx-cart-alt"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "CardComp",
};
</script>

<style scoped>
.popular__card {
  position: relative;
  width: 238px;
  background-color: var(--container-color);
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 3.5rem;
  overflow: hidden;
}

.popular__card .shape__smaller {
  position: absolute;
  top: -2.5rem;
  left: -2.5rem;
}

/* ... Include other styles from the provided CSS ... */

.popular__button {
  border: none;
  outline: none;
  padding: .75rem 1rem;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 1rem 0 1rem 0;
  cursor: pointer;
}

.popular__button i {
  font-size: 1.25rem;
}

.popular__card:hover .popular__img {
  transform: translateY(-.25rem);
}
</style>
