<template>
<div>
<!-- <div class="chart-wrapper">
  <chart :options="chartOptionsBar"></chart>

</div>

<div class="chart-wrapper">
  <chart :options="chartOptionsLine"></chart>
</div> -->


<v-card
      class="mx-auto text-center"
      color="green"
      dark
      max-width="1200"
    >
      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)">
 <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      auto-draw
      height="150"
    ></v-sparkline>
    </v-sheet>
      </v-card-text>

         <v-card-text >
          <span>Total Confirmed Cases In India</span>
        </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-btn block text to="/">Date: 30 January to Today</v-btn>
      </v-card-actions>
    </v-card>
</div>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
import axios from 'axios'

  export default {
    data () {
      return {
        coronaIndiaData:{},

width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    value: [],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,

    }
  },
    mounted(){

 axios.get('/api/coronavirusIndia')
.then((response) =>{
  // console.log(response.data);
  //this.coronaIndiaData = response.data.statewise;
  this.coronaIndiaData = response.data.cases_time_series;
  // console.log(response.data.cases_time_series[0].date);

  //this.chartOptionsLine.xAxis.data[3]=['q1','q2','q3'];
//this.chartOptionsLine.series.data[i];
   for(var i=0;i<83;i++){
       this.value.push(parseInt(response.data.cases_time_series[i].totalconfirmed));

      //  this.chartOptionsLine.xAxis.data.push(response.data.cases_time_series[i].date);
        //this.chartOptionsLine.series[i].data.push(response.data.cases_time_series[i].totalconfirmed);
         }
        // console.log(this.chartOptionsLine.xAxis.data[2]);
}).catch((err) =>{
  console.log(err);
});

    },
  }

</script>
