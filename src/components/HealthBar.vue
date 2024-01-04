<script>
export default {
  props: ["id", "description", "width"],
  setup(props) {
    const id = props.id;
    const dsc = props.description;
    const width = props.width < 0 ? 0 : props.width;
    return { id, dsc, width };
  },
};
</script>

<template>
  <section :id="id" class="container">
    <h2>{{ dsc }}</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="{ width: width + '%' }"></div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

#monster h2,
#player h2 {
  margin: 0.25rem;
}
</style>
