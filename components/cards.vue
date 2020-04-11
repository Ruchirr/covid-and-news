<template>
  <div >
  <b-card v-for="(cd,i) in coronaData" :key="i" align="center"  class=" mr-sm-5 mr-md-5 mr-lg-5 mr-xl-5 mr-5 ml-5 ml-sm-5 ml-md-5 ml-lg-5 ml-xl-5 mt-5 mt-sm-5 mt-md-5 mt-lg-5 mt-xl-5 mx-auto overflow-hidden rounded-sm">
     <template v-slot:header>
        <h6 class="mb-0">{{coronaData[i].title}}</h6>
      </template>

    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="coronaData[i].urlToImage" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
         <b-list-group flush>
      <b-list-group-item class="font-weight-normal">{{coronaData[i].description}}</b-list-group-item>
      <b-list-group-item class="text-secondary">{{coronaData[i].content}}</b-list-group-item>
      <b-list-group-item> <i>Author: {{coronaData[i].author}}</i></b-list-group-item>
      <!-- <i>Source: {{coronaData[i].source.id}}</i>-->
    </b-list-group>
  </b-col>
</b-row>

    <template v-slot:footer>
      <i class="float-left font-weight-lighter" >Published At: {{coronaData[i].publishedAt}}</i>
      <b-button class="float-right" :href="coronaData[i].url" variant="outline-info">Website</b-button>
      </template>
  </b-card>


</div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
    coronaData:{},
    }
  },
mounted() {
axios.get('http://localhost:3000/api/covidnews')
.then((response) =>{
  console.log(response.data.articles);
  this.coronaData = response.data.articles;

}).catch((err) =>{
  console.log(err);
});
}
}
</script>
