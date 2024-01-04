<script>
import { computed } from "vue";
import { useStore } from "vuex";

import BattleLog from "./BattleLog.vue";

export default {
  components: {
    BattleLog,
  },

  setup() {
    const store = useStore();
    const battleLogs = computed(() => store.getters.getBattleLogs);
    return { battleLogs };
  },
};
</script>

<template>
  <section id="log" class="container">
    <h2>Battle logs</h2>
    <ul>
      <BattleLog
        v-for="(battleLog, index) in battleLogs"
        :key="index"
        :id="index"
        :side="battleLog.side"
        :move="battleLog.action"
        :value="battleLog.value"
      />
    </ul>
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

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}
#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
