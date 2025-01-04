<template>
  <span :class="fontSize"><span class="text-primary" :class="fontSize">Vue</span>Commerce</span>
</template>

<script>
export default {
  name: "Logo",
  props: {
    fontSize: {
      type: String,
      default: "h1",
    },
  },
};
</script>
