<template>
  <div>
    <p v-if="$fetchState.pending">Cargando...</p>
    <p v-else-if="$fetchState.error">Ha ocurrido un error :(</p>
    <div v-else>
      <h1 class="card-title">Universidades</h1>
      <ul class="pl-5">
        <li v-for="mountain of mountains" :key="mountain.title" class="mb-2">
          <nuxt-link :to="{ name: 'mountain-slug', params: { slug: mountain.domains[0] }}">{{ mountain.name }}</nuxt-link></li>
      </ul>
      <button class="btn btn-accent btn-md mt-3" @click="$fetch">Recargar</button>
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
      'http://universities.hipolabs.com/search?country=Spain'
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
