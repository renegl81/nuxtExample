<template>
   <div class="container">
     <h1>My page</h1>
     <h2 v-if="showInfo" :class="lastname.length > 0 ? 'blue' : 'red'">Showing reactivity</h2>
     <button class="btn btn-prev" @click="toggleInfo"><span v-if="showInfo">ocultar</span><span v-else>mostrar</span></button>
     <h3>Name: {{ name }}</h3>
     <h3>Last name: {{ lastname }}</h3>
     <h3>Full name: {{ fullName }}</h3>
     <div class="mform">
       <label>Name</label>
       <input v-model="name" type="text"/>
       <label>Lastname</label>
       <input v-model="lastname" type="text"/>
       <button class="button--doc text-green"  @click="addUser">Agregar</button>
     </div>
     <ul class="list-none hover:list-disc">
       <li v-for="user in users" :key="user.id"> {{ user.name }}  <button class="btn btn-prev" @click="removeUser(user.id)">Eliminar</button></li>
     </ul>

   </div>
</template>

<script>
export default {
  layout: 'MyDefault',
  data: () => {
    return {
      name: 'John',
      lastname: '',
      showInfo: false,
      users: [
        {id: 1, name: 'Juan'},
        {id: 2, name: 'Pedro'},
        {id: 3, name: 'Maria'},
      ]
    }
  },
  computed: {
      fullName() {
        return this.name + ' ' + this.lastname
      }
  },
  watch: {
     showInfo (val){
        console.log('Ha cambiado a ' + val)
    }
  },
  mounted() {
    //  this.showInfo = true;
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
