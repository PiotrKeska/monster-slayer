<script>
import { computed } from "vue";
import { useStore } from "vuex";

import HealthBar from "./HealthBar.vue";
import Controls from "./Controls.vue";
import BattleLogs from "./BattleLogs.vue";
import GameSummary from "./GameSummary.vue";

export default {
  components: {
    HealthBar,
    Controls,
    BattleLogs,
    GameSummary,
  },

  setup() {
    const store = useStore();

    const gameInfo = {
      monsterId: "monster",
      monsterDsc: "Monster Health",
      playerId: "player",
      playerDsc: "Player Health",
    };

    const monsterHealth = computed(() => store.getters.getMonsterHealth);
    const playerHealth = computed(() => store.getters.getPlayerHealth);

    return {
      gameInfo,
      monsterHealth,
      playerHealth,
    };
  },
};
</script>

<template>
  <div id="game">
    <HealthBar
      :key="monsterHealth"
      :id="gameInfo.monsterId"
      :description="gameInfo.monsterDsc"
      :width="monsterHealth"
    />
    <HealthBar
      :key="playerHealth"
      :id="gameInfo.playerId"
      :description="gameInfo.playerDsc"
      :width="playerHealth"
    />
    <GameSummary />
    <Controls />
    <BattleLogs />
  </div>
</template>

<style scoped></style>
