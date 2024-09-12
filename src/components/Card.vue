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
  position: relative;
  background-color: var(--white-color, #ffffff);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.featured__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.featured__img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.featured__title {
  font-size: 1.25rem;
  color: var(--title-color, #333333);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.featured__subtitle {
  font-size: 0.9rem;
  color: var(--text-color-light, #666666);
  margin-bottom: 1rem;
}

.featured__price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--first-color, #3a86ff);
  margin-bottom: 1.5rem;
}

.featured__button {
  margin-top: auto;
  background-color: var(--first-color, #3a86ff);
  color: var(--white-color, #ffffff);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.featured__button:hover {
  background-color: var(--first-color-alt, #2f6bcc);
}

.shape__smaller {
  display: none;
}
</style>