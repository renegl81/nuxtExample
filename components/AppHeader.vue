<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">{{ title }}</a>
    </div>
  </div>

</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  .my-header h1{
    color: blue;
  }
</style>
