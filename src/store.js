import { createStore } from "vuex";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createBattleLog(side, action, value) {
  return {
    side,
    action,
    value,
  };
}

const store = createStore({
  state() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLogs: [],
    };
  },

  mutations: {
    playerNormalAttack(state) {
      state.currentRound++;
      const damageValue = getRandomNumber(5, 12);
      state.monsterHealth -= damageValue;
      const battleLog = createBattleLog("player", "normal attack", damageValue);
      state.battleLogs.push(battleLog);
    },

    playerSpecialAttack(state) {
      state.currentRound++;
      const damageValue = getRandomNumber(10, 25);
      state.monsterHealth -= damageValue;
      const battleLog = createBattleLog(
        "player",
        "special attack",
        damageValue
      );
      state.battleLogs.push(battleLog);
    },

    playerHealMove(state) {
      state.currentRound++;
      const healValue = getRandomNumber(8, 20);
      state.playerHealth + healValue > 100
        ? (state.playerHealth = 100)
        : (state.playerHealth += healValue);
      const battleLog = createBattleLog("player", "heal", healValue);
      state.battleLogs.push(battleLog);
    },

    monsterAttack(state) {
      const damageValue = getRandomNumber(8, 15);
      state.playerHealth -= damageValue;
      const battleLog = createBattleLog(
        "monster",
        "normal attack",
        damageValue
      );
      state.battleLogs.push(battleLog);
    },

    checkHealthBars(state) {
      if (state.monsterHealth <= 0) {
        state.winner = "player";
      } else if (state.playerHealth <= 0) {
        state.winner = "monster";
      } else if (state.playerHealth <= 0 && state.monsterHealth <= 0) {
        state.winner = "draw";
      }
    },

    surrender(state) {
      state.winner = "monster";
    },

    startNewGame(state) {
      state.playerHealth = 100;
      state.monsterHealth = 100;
      state.currentRound = 0;
      state.winner = null;
      state.battleLogs = [];
    },
  },

  actions: {
    playerNormalAttack(context) {
      context.commit("playerNormalAttack");
      context.commit("monsterAttack");
      context.commit("checkHealthBars");
    },

    playerSpecialAttack(context) {
      context.commit("playerSpecialAttack");
      context.commit("monsterAttack");
      context.commit("checkHealthBars");
    },
    playerHealMove(context) {
      context.commit("playerHealMove");
      context.commit("monsterAttack");
    },

    surrender(context) {
      context.commit("surrender");
    },

    startNewGame(context) {
      context.commit("startNewGame");
    },
  },

  getters: {
    getMonsterHealth(state) {
      return state.monsterHealth;
    },
    getPlayerHealth(state) {
      return state.playerHealth;
    },
    getWinner(state) {
      return state.winner;
    },
    getBattleLogs(state) {
      return state.battleLogs;
    },

    getRound(state) {
      return state.currentRound;
    },
  },
});

export default store;
