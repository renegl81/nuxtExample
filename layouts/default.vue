<template>
  <div>
    <nav class="my-nav">
      <div class="text-center">
        <NuxtLink to="/" style="margin-right: 25px;">Home</NuxtLink>
        <NuxtLink to="/myPage" style="margin-right: 25px;">My page</NuxtLink>
        <NuxtLink to="/oPage">Other page</NuxtLink>
      </div>
    </nav>
    <Nuxt />
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
