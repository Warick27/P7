<!-- eslint-disable vue/multi-word-component-names  -->

<template>
  <div class="alert alert-danger">{{ error }}</div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Error",
  props: ["error"],
};
</script>
