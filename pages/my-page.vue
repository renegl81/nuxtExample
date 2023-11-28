<template>
   <div class="container">
     <AppHeader v-if="showInfo" title="Listado de usuarios" />
     <button class="btn btn-sm" :class="showInfo ? 'btn-error' : 'btn-accent'" @click="toggleInfo">
       <span v-if="showInfo">ocultar</span>
       <span v-else>mostrar</span>
     </button>
     <UserInfo :name="name" :lastname="lastname" />
     <div class="divider"></div>

         <div class="">
            <div class="">
              <div class="card w-96 bg-neutral text-neutral-content mt-3">
                <div class="card-body">
              <div class="mt-2">
                <h2 class="card-title">Entrar Usuario</h2>
                <label class="w-full">Nombre</label>
                <input v-model="name" class="input input-bordered input-neutral text-neutral w-full mb-2" type="text"/>
                <label class="w-full">Apellido</label>
                <input v-model="lastname" class="input input-bordered input-neutral text-neutral w-full" type="text"/>
                <button class="btn btn-primary mt-2 btn-sm"  @click="addUser">Agregar</button>
              </div>
                </div>
              </div>
            </div>
           <div class="mt-3">
             <div class="card w-96 bg-neutral text-neutral-content mt-3">
               <div class="card-body">
             <ul class="list-none hover:list-disc">
               <li v-for="user in users" :key="user.id" class="flex justify-between mb-2">
                 {{ user.name }}
                 <button class="btn btn-error btn-sm" @click="removeUser(user.id)">
                   Eliminar
                 </button>
               </li>
             </ul>
               </div>
             </div>
           </div>
         </div>






   </div>
</template>

<script>
import UserInfo from "~/components/UserInfo.vue";
import AppHeader from "~/components/AppHeader.vue";

export default {
  components: {AppHeader, UserInfo},
  data: () => {
    return {
      name: '',
      lastname: '',
      showInfo: true,
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
