<script>
import { computed } from "vue";
import { useStore } from "vuex";

import ButtonBase from "./ButtonBase.vue";
export default {
  components: {
    ButtonBase,
  },
  setup() {
    const store = useStore();
    const btnProps = {
      buttonDsc: "Start New Game",
      action: "startNewGame",
    };

    const winner = computed(() => store.getters.getWinner);

    return { btnProps, winner };
  },
};
</script>

<template>
  <section class="container" v-if="winner">
    <h2>Game over</h2>
    <h3 v-if="winner === 'monster'">You lost</h3>
    <h3 v-else-if="winner === 'player'">You won</h3>
    <h3 v-else="winner === 'draw'">Draw</h3>
    <ButtonBase :description="btnProps.buttonDsc" :move="btnProps.action" />
  </section>
</template>

<style scoped>
.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}
</style>
