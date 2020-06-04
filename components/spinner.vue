<template>
  <div style="margin-top:100px; margin-bottom:100px"   class="ml-3 text-center d-flex justify-content-between">
      <b-spinner
        v-for="variant in variants"
        :variant="variant"
        :key="variant"
        type="grow"
      ></b-spinner>
    </div>
</template>
<script>
export default {
  data(){
    return {
              variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'dark'],

    }
  }
}
</script>
