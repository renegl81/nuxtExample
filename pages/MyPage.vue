<template>
   <div class="container">
     <AppHeader />
     <h2 v-if="showInfo" :class="lastname.length > 0 ? 'blue' : 'red'">Showing reactivity</h2>
     <button class="btn btn-prev" @click="toggleInfo"><span v-if="showInfo">ocultar</span><span v-else>mostrar</span></button>
     <UserInfo :name="name" :lastname="lastname" />
     <div class="mform">
       <label>Name</label>
       <input v-model="name" type="text"/>
       <label>Lastname</label>
       <input v-model="lastname" type="text"/>
       <button class="button--doc text-green"  @click="addUser">Agregar</button>
     </div>
     <ul class="list-none hover:list-disc">
       <li v-for="user in users" :key="user.id"> {{ user.name }}  <button class="btn btn-prev btn-red" @click="removeUser(user.id)">Eliminar</button></li>
     </ul>

   </div>
</template>

<script>
export default {
  layout: 'MyPage',
  data: () => {
    return {
      name: '',
      lastname: '',
      showInfo: false,
      users: [
        {id: 1, name: 'Juan'},
        {id: 2, name: 'Pedro'},
        {id: 3, name: 'Maria'},
      ]
    }
  },
  watch: {
     showInfo (val){
        console.log('Ha cambiado a ' + val)
    }
  },
  mounted() {
    setTimeout(()=>{
      this.showInfo = true
    }, 3000)
  },
  methods: {
    toggleInfo(){
      this.showInfo = !this.showInfo
    },
    addUser(){
      const idValue = this.users.length + 2;
      this.users.push({id: idValue , name: this.name})
    },
    removeUser(id){
      for(let i=0; i < this.users.length; i++){
        if(this.users[i].id === id){
          this.users.splice(i, 1);
        }
      }
    }
  }
}
</script>

<style>
 .mform {
   padding: 20px;
 }
 .mform input {
   border-radius: 4px;
   padding: 5px;
 }
 .blue {
   color: blue;
 }
 .red {
   color: red
 }
 .container {
   padding-top: 40px;
   max-width: 768px;
   margin-left: auto;
   margin-right: auto;
 }
</style>
