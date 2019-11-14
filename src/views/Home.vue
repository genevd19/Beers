<template>
    <section>
        <b-field grouped group-multiline>
            
               
        </b-field>
        <div class="container">
                 <h2 class="title">Liste des gares</h2>
           </div>
        <b-table :data="tableDataSimple">

            <template slot-scope="props">
                <b-table-column label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column label="Liste des gares">
                      <router-link :to="{name:'gare', params: {id:props.row.id, gare:props.row}}">{{ props.row.name }} </router-link>
                </b-table-column>

          <b-table-column label="Liste des gares">
              <a :href="'/gare'"props.row.id>{{ props.row.id}}</a>
          </b-table-column>
                  <b-table-column label="Nom">
                   
                      <router-link :to="{path:'/gare/'+props.row.id}"> {{ props.row.name }}</router-link>


                </b-table-column>
            </template>
            
        </b-table>
    </section>
</template>

<script>
    import Gares from '@/services/RailService.js'

    export default {
      created(){
     
       Gares.getStations()
        .then(response => {
          let stations = []
          response.station.forEach(element => {
            let station ={}
            station.name = element.name
            station.id = element.id
            stations.push(station)
          });
          this.tableDataSimple = stations
        })

        .catch()
      },
        data() {
            const tableDataSimple = [
                { 'id': 1, 'name': 'nom de la brasserie', 'description': 'la description2', 'website': 'http://www.anheuser-busch.com/', 'icon': 'https://brewerydb-images.s3.amazonaws.com/brewery/BznahA/upload_0FkKKl-icon.png' },
                { 'id': 2, 'name': 'Boston Beer Company ', 'description': 'Breckenridge Brewery was founded in 1990 in Breckenridge, Colorado. In the past two plus decades Breckenridge Brewery has grown from a small 3,000-barrels-a-year brewpub to one of the most successful craft beer and restaurant companies in the nation. It now handcrafts more than 70,000 barrels of fresh beer annually and owns and operates five brewpubs and ale houses in the state of Colorado. For more information visit www.breckbrew.com.', 'website': 'https://www.breckbrew.com/', 'icon': 'https://brewerydb-images.s3.amazonaws.com/brewery/IImUD9/upload_jzk0J2-icon.png' },
                 { 'id': 2, 'name': 'Brouwerij De Leite', 'description': 'Breckenridge Brewery was founded in 1990 in Breckenridge, Colorado. In the past two plus decades Breckenridge Brewery has grown from a small 3,000-barrels-a-year brewpub to one of the most successful craft beer and restaurant companies in the nation. It now handcrafts more than 70,000 barrels of fresh beer annually and owns and operates five brewpubs and ale houses in the state of Colorado. For more information visit www.breckbrew.com.', 'website': 'https://www.breckbrew.com/', 'icon': 'https://brewerydb-images.s3.amazonaws.com/brewery/p3YrOa/upload_yOXpDJ-icon.png' },
                  

            ]

            return {
                tableDataSimple,
                isCustom: false
            }
        },
        methods:{
          theStation(id){
            alert (id)
          }
        }
    }
</script>

