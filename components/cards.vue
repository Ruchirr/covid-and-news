<template>

  <div >
    <!-- <img src="~assets/flags/fr.svg" /> -->
    <!-- <b-img :src="require(`~/assets/images/fr.svg`)" thumbnail fluid alt="Responsive image"></b-img>
    <b-img :src="require(`~/assets/images/fr.svg`)" fluid alt="Responsive image"></b-img> -->

  <b-container fluid class="p-5" v-if="isHidden" >
      <b-row >
        <b-col cols="2" v-for="url in section" :key="url" >
          <!-- <b-button  v-b-toggle.collapse-1 variant="none" @click="getPosts(url)"> -->
          <b-img class="rounded" :src="require(`~/assets/images/${url}.svg`)" @click="getPosts(url)"></b-img>
        <!-- <country-flag :country='url' size='big' class="rounded"/> -->
        <!-- </b-button> -->
         </b-col>
      </b-row>
  </b-container>
   <b-progress
              min="1"
              max="20"
              :value="counter"
             variant="success"
              height="5px"
              class="mx-n4 rounded-3"
              animated striped
            ></b-progress>

 <b-button
            v-if="!showButton"
            size="sm"

            @click="unHideFlags()"

              variant="none"
          >
            <b-icon icon="arrow-return-left" font-scale="3" > </b-icon>
          </b-button>
          <h2 style="text-align:center" class="font-weight-light" > Hot headlines from international sources</h2>

  <!-- <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">  -->
     <b-card  :if="!isHidden" v-for="(cd,i) in coronaData" :key="i" align="center"
      class=" mr-sm-5 mr-md-5 mr-lg-5 mr-xl-5 mr-5
      ml-5 ml-sm-5 ml-md-5 ml-lg-5 ml-xl-5 mt-2 mt-sm-2 mt-md-2
      mt-lg-2 mt-xl-2 mx-auto overflow-hidden rounded-sm">
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
      <i class="float-left font-weight-lighter mt-1 mt-sm-1 mt-md-1
      mt-lg-1 mt-xl-1" style="font-size:1.7vw; ">Published At: {{coronaData[i].publishedAt}}</i>
      <b-button class="float-right" :href="coronaData[i].url" variant="outline-info">Website</b-button>
      </template>
  </b-card>
  <!-- </b-collapse> -->



</div>
</template>
<script>
import axios from 'axios';
// import CountryFlag from 'vue-country-flag'
export default {
  // components:{
  //   CountryFlag
  // },
  data(){
    return{
              // mainProps: { blank: false, width: 75, height: 75,  class: 'm1'  }

      section:['ae', 'ar', 'at', 'au', 'be', 'bg', 'br',
      'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb',
      'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv',
      'ma', 'mx','my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru',
      'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za' ],
      x:"au",
      urlBase: 'https://newsapi.org/v2/top-headlines?country=',
      ApiKey: 'eb1ed87055d544a6896c608a5bb3c7ad',
      post: {},
    coronaData:{},
    isHidden: true,
    showButton: true,
    busy: false,
        processing: false,
        counter: 1,
        interval: null
    }
  },
mounted() {
// axios.get('/api/covidnews')
// .then((response) =>{
//   console.log(response.data.articles);
//   this.coronaData = response.data.articles;
// }).catch((err) =>{
//   console.log(err);
// });
//this.getPosts('in')
},
methods:{
 clearInterval() {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      },
  getPosts(section) {
    this.counter = 20
        this.processing = true
        // Simulate an async request
        this.clearInterval()
        this.interval = setInterval(() => {
          if (this.counter < 20) {
            this.counter = this.counter + 1
          } else {
            this.clearInterval()
            this.$nextTick(() => {
              this.busy = this.processing = false
            })
          }
        }, 350);
    this.isHidden = false;
     this.showButton = false;
    console.log("inside posts");
      let url = this.urlBase+section+"&apiKey="+this.ApiKey;
      axios.get(url).then((response) => {
        this.coronaData = response.data.articles;
      }).catch( error => { console.log(error); });
    },
    unHideFlags(){
      this.isHidden = true;
       this.showButton = true;
    },
  }
}
</script>
