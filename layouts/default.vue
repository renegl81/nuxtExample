<template>
  <div>
    <div class="navbar bg-neutral text-neutral-content">
      <div class="ml-5 text-center">
        <NuxtLink to="/" class="ml-3">Inicio</NuxtLink>
        <NuxtLink to="/my-page" class="ml-5"> Reactividad</NuxtLink>
        <NuxtLink to="/o-page" class="ml-3">Ajax</NuxtLink>
      </div>
    </div>
    <div class="container">
      <Nuxt />
    </div>

  </div>
</template>

<script>
export default {
  name: 'MyDefault',
}
</script>

<style>
.my-nav {
  height: 50px;
}
.my-nav a{
  margin-right: 25px;
  color: black;
  font-weight: bold;
}
</style>
