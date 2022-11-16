<template>
  <div class="container">
    <p v-if="mountain">{{ mountain }}</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
  </div>
</template>

<script>


export default {
  data: () => ({
    mountain: null
  }),
  mounted() {
    this.mountain = this.$router.params.id
  },
  head: {
    title: 'Mountain page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Es solo una pagina de prueba'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
</script>

<style scoped>

</style>
