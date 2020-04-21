<template>

<div>


  <GChart
    :settings="{packages: ['bar']}"
    :data="chartData"
    :options="chartOptions"
    :createChart="(el, google) => new google.charts.Bar(el)"
    @ready="onChartReady"
  />
<!--
<div>
  <trend
    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
    :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
    auto-draw
    smooth>
  </trend>
  </div>
    <div class="large">

        <b-card class=" mr-sm-5 mr-md-5 mr-lg-5 mr-xl-5 mr-5
      ml-5 ml-sm-5 ml-md-5 ml-lg-5 ml-xl-5 mt-10 mt-sm-10 mt-md-10
      mt-lg-10 mt-xl-10 mx-auto overflow-hidden rounded-sm">
    <v-sparkline
@load="funx"
        :value="value"
        :labels="lables"
        :gradient="gradient"
        smooth
        :padding="padding"
        :line-width="width"
        :stroke-linecap="lineCap"
        :gradient-direction="gradientDirection"
        :fill="fill"
        :type="type"
        :auto-line-width="autoLineWidth"
        auto-draw
        show-labels="true"
      ></v-sparkline>
       </b-card>
  </div> -->

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
import { GChart } from 'vue-google-charts'

  export default {
     components: {
    GChart
  },
    data () {
      return {

       chartsLib: null,
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ]
    }
  },
        mounted(){
   axios.get('/api/coronavirusIndia')
.then((response) =>{
  console.log(response.data.cases_time_series);
  this.coronaIndiaData = response.cases_time_series;
}).catch((err) =>{
  console.log(err);
});



 },
  computed: {
    chartOptions () {
      if (!this.chartsLib) return null
      return this.chartsLib.charts.Bar.convertOptions({
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        },
        bars: 'horizontal', // Required for Material Bar Charts.
        hAxis: { format: 'decimal' },
        height: 400,
        colors: ['#1b9e77', '#d95f02', '#7570b3']
      })
    }
  },
   methods: {
    onChartReady (chart, google) {
      this.chartsLib = google
    },
    funx(){

     for(var i=0;i<10;i++){
       for(var j=0;j<10;j++){
        this.value[i][j] = this.coronaIndiaData[i].date;
        //this.lables[i][j] = this.coronaIndiaData[i].date;
       }

}
}
  }

}

</script>
