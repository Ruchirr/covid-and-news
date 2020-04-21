<template>
<div class="table-responsive-md table-responsive-sm table-responsive-lg table-responsive-xl table-responsive">
  <!-- sticky-header
  :fields="fields" -->

  <b-table

     hover table-secondary
    responsive="sm"
      :items="coronaData"
      large
      :sort-direction="sortDirection"
      title= "Corona Virus All Over The World"
      table-variant="info"
      head-variant="dark"


    >
    </b-table>


<div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>

</div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
  return {
    sortBy: 'deaths',
        sortDesc: true,
    coronaData:{},
    fields: [
          { key: 'country_name', sortable: true },
          { key: 'cases', sortable: true },
          { key: 'deaths', sortable: true },

           { key: 'total_recovered', sortable: true },
          { key: 'new_deaths', sortable: true, variant: 'danger' },
          { key: 'new_cases', sortable: true },
          { key: 'serious_critical', sortable: true },
            { key: 'active_cases', sortable: true },
          { key: 'total_cases_per_1m_population', sortable: true }
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
