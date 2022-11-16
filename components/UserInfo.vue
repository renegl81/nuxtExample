<template>
<div>
  <h3>Name: {{ name }}</h3>
  <h3>Last name: {{ lastname }}</h3>
  <h3>Full name: {{ fullName }}</h3>
</div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    name: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    }
  },
  computed: {
    fullName() {
      return this.name + ' ' + this.lastname
    }
  },
}
</script>

<style scoped>

</style>
