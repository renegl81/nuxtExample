<template>
<div>
  <div v-if="name || lastname" class="card bg-info text-info-content mt-5">
    <div class="card-body">
      <h3 class="mt-2">Nombre: {{ name }}</h3>
      <h3 class="mt-2">Apellido: {{ lastname }}</h3>
      <h3 class="mt-2">Nombre completo: {{ fullName }}</h3>
    </div>
  </div>

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
