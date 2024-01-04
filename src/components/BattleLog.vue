<script>
export default {
  props: ["id", "side", "move", "value"],
  setup(props) {
    const log = {
      id: props.id,
      side: props.side,
      move: props.move,
      value: props.value,
    };

    return { log };
  },
};
</script>

<template>
  <li>
    {{ log.id + 1 }}. The <span>{{ log.side }}</span> uses
    <span>{{ log.move }}</span> by <span>{{ log.value }}</span>
  </li>
</template>

<style scoped>
li {
  margin: 0.5rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>
