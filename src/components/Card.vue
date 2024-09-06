<template>
  <article class="featured__card">
    <div class="shape shape__smaller"></div>
    <div class="card-header">
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <slot name="cardBody"></slot>
    </div>
    <div class="card-footer">
      <slot name="cardFooter"></slot>
    </div>
  </article>
</template>

<script>
export default {
  name: "CardComp",
};
</script>

<style scoped>
.featured__card {
  width: 250px;
  position: relative;
  background-color: var(--container-color);
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 1rem;
  margin-bottom: 3.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.featured__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-header, .card-body, .card-footer {
  position: relative;
  z-index: 1;
}

.card-body {
  flex-grow: 1;
}

.card-footer {
  margin-top: 1rem;
}

.featured__img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.featured__title {
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
}

.featured__subtitle {
  font-size: 0.875rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.featured__price {
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.featured__button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  background-color: var(--first-color);
  color: var(--white-color);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.featured__button:hover {
  background-color: var(--first-color-alt);
}
</style>
