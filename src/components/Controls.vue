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

    const buttonsNames = {
      attack: "Attack",
      specAttack: "Special Attack",
      heal: "Heal",
      surrender: "Surrender",
    };

    const actions = {
      playerNormalAttack: "playerNormalAttack",
      playerSpecialAttack: "playerSpecialAttack",
      playerHealMove: "playerHealMove",
      surrender: "surrender",
    };

    const winner = computed(() => store.getters.getWinner);
    const roundNumber = computed(() => store.getters.getRound);
    console.log(roundNumber);
    return {
      buttonsNames,
      actions,
      winner,
      roundNumber,
    };
  },
};
</script>

<template>
  <section id="controls" v-if="!winner" :key="roundNumber">
    <ButtonBase
      :description="buttonsNames.attack"
      :move="actions.playerNormalAttack"
      :disable="false"
    />
    <ButtonBase
      :description="buttonsNames.specAttack"
      :move="actions.playerSpecialAttack"
      :disable="roundNumber % 3 !== 0"
    />
    <ButtonBase
      :description="buttonsNames.heal"
      :move="actions.playerHealMove"
      :disable="false"
    />
    <ButtonBase
      :description="buttonsNames.surrender"
      :move="actions.surrender"
      :disable="false"
    />
  </section>
</template>

<style scoped>
section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
