<template>
  <div class="container">
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="mountain of mountains" :key="mountain.title">{{ mountain.title }}</li>
      </ul>
      <button class="button--doc text-green" @click="$fetch">Refresh</button>
    </div>
  </div>
</template>

<script>


export default {
  layout: 'MyDefault',
  data: () => ({
    mountains: []
  }),
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then(res => res.json())
  },
  head: {
    title: 'Otra pagina',
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
