
<template>
<div class="container">
  <india-table-corona />
  <chart-one />
  </div>
</template>
<script>

import IndiaTableCorona from '~/components/IndiaTableCorona.vue'
import ChartOne from '~/components/chartone.vue'
export default {
  components:{
    IndiaTableCorona,

    ChartOne

  }

}
</script>
