<template>
<div class="table-responsive-md table-responsive-sm table-responsive-lg table-responsive-xl table-responsive">
  <!-- sticky-header
  :fields="fields" -->

  <b-table
     hover table-secondary
    responsive="sm"
      :items="coronaIndiaData"

      large
      table-variant="info"
      head-variant="dark"
    >
    </b-table>

    <!-- <b-table
     hover table-secondary
    responsive="sm"
      :items="coronaIndiaDataTested"

      large
      table-variant="info"
      head-variant="dark"
    >
    </b-table> -->
</div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return{
    coronaIndiaData:{},
    coronaIndiaDataTested:{},
    }
  },

 mounted(){
   axios.get('/api/coronavirusIndia')
.then((response) =>{
  console.log(response.data);
  this.coronaIndiaData = response.data.statewise;
  this.coronaIndiaDataTested = response.data.cases_time_series;

}).catch((err) =>{
  console.log(err);
});

 }
}
</script>
