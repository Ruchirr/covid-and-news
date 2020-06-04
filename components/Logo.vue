<template>
<div class="mt-5 table-responsive-md table-responsive-sm table-responsive-lg table-responsive-xl table-responsive">
  <!-- sticky-header
  :fields="fields" -->

  <b-table

     hover table-secondary
    responsive="sm"
      :items="coronaData"
      :fields="fields"
      large
      title= "Corona Virus All Over The World"
      table-variant="info"
      head-variant="dark"


    >
    </b-table>

</div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
  return {
    coronaData:{},
    fields: [
          { key: 'country_name'},
          { key: 'cases'},
          { key: 'deaths', variant: 'warning'},

           { key: 'total_recovered'},
          { key: 'new_deaths', variant: 'danger' },
          { key: 'new_cases'},
          { key: 'serious_critical'},
            { key: 'active_cases', variant: 'primary'},
          { key: 'total_cases_per_1m_population'}
        ],
      }
    },
  mounted() {
axios.get('/api/coronavirus')
.then((response) =>{
  console.log(response.data);
  this.coronaData = response.data;

}).catch((err) =>{
  console.log(err);
});

}

}
</script>
