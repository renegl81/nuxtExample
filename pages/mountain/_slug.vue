<template>
  <div class="container">
    <div v-if="message" role="alert" class="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span> {{ message}}</span>
    </div>
      <div  v-if="mountain" class="card bg-neutral text-neutral-content mt-5">
        <div class="card-body items-center">
          <h2 class="card-title" onclick="my_modal.showModal()">{{ mountain.name }}</h2>
          <p class="text-xl mb-3"><b class="mr-2">Web:</b>  <span v-if="mountain.web_pages && mountain.web_pages.length >0">{{ mountain.web_pages[0] }}</span> </p>
        </div>
      </div>
    <dialog id="my_modal" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Hola!</h3>
        <p class="py-4">Has hecho click nuestra Universidad</p>
        <div class="modal-action">
          <form method="dialog">

            <button class="btn">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script>


export default {
  data: () => ({
    mountain: null,
    message: null
  }),
  head() {
    return {
      title: this.mountain ? this.mountain.name : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Es solo una pagina de prueba'
        }
      ],
    }

  },
  watch: {
    'mountain' (val){
      this.message = 'Se ha cargado los datos'
    }
  },
  async mounted() {
    const slug = this.$route.params.slug
    const universities = await fetch(
      'http://universities.hipolabs.com/search?country=Spain'
    ).then(res => res.json())
    this.mountain = universities.filter(item => {
       return item.domains[0] === slug
    })[0]

  },
}
</script>

<style scoped>

</style>
