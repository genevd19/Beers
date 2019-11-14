<template>

    <section>
   <div class="container">
   <h1 class="title"> Gare de {{ gare.name}}</h1>
   {{ gare.id }}   <hr>
   <button class="button " @click="addFav(gare.id)">Ajouter aux favoris</button><br>
   {{ trains }}
  
</div> 
    </section>
</template>
<script>
    import Gare from '@/services/RailService.js'

    export default {
      created(){
     
       Gare.getTrains(this.gare.id)
        .then(response => this.trains = response.departures)
      },
          
        data() {
            return {
                gare:{
                    id: this.$route.params.id,
                    nom: this.$route.params.gare.name
                    
            },
            
        trains:[]
          }
        }
    }
</script>