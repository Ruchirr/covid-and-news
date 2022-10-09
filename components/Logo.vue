<template>

<b-container fluid="sm" class="b-form-row">
  <br/>
<br/>
<br/>
  <b-row class="text-center">
    <b-card bg-variant="dark" text-variant="white">
      <b-card-text style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"> 
          On the request of many I am sharing how I loaded the current status of each country
      </b-card-text> 
    <b-img src="~/assets/jpeg/codeSnippetOne.png" fluid alt="Responsive image"></b-img>
  <b-card-text style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">
            The api is no longer free, therefore I am closing the code. In order to take a look on how current updates of 
            API data can make website dynamic in nature please check the news section in navigation.
          </b-card-text>
         </b-card>
</b-row>
<br/>
<br/>
<br/>
<b-row class="text-center">
        <b-card bg-variant="dark" text-variant="white">
        <b-card-text style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"> Front End Loop To Add it into the Illuminati "BootStrap" Table
  </b-card-text> 
  <b-img src="~/assets/jpeg/codeSnippetTwo.png" fluid alt="Responsive image"></b-img>
<b-card-text style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">
            This is a script part and could be organically stored and retrived, though I used this method
    </b-card-text>
         </b-card>
</b-row>

<br/>
<br/>
<br/>
  <b-row class="text-center">
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Actively Seeking For Work In Australia and Worldwide">

          <p style="font-family:courier; color:cornflowerblue;font-weight: 900;">Please copy paste this link for my profile
          https://www.linkedin.com/in/ruchir-patil/</p>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
 </b-row>
 <br/>
<br/>
<br/>
  <b-row class="text-center">
  <b-col style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">Qualified in Masters of Information Technology from Central Queensland University, Australia. Offering internship experience in software development and outstanding academic performance in the multinational culture. 60% face to face customer support with multinational clients in Australia and India worked casually, as a volunteer and as an intern with various organisation involved with hospitality, Information Technology, Education</b-col>
  
  
 

<!-- <div class="mt-5 table-responsive-md table-responsive-sm table-responsive-lg table-responsive-xl table-responsive"> -->
  <!-- sticky-header
  :fields="fields" -->
  
    <div>
  <b-card
    title="I appreciate your time and consideration"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; color:brown; font-weight: 900;">
      Open for further discussion 
    </b-card-text>

    <b-button href="/isd" variant="primary" style="font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">With Pleasure</b-button>
  </b-card>
</div>

</b-row>
  <!-- <b-table

     hover table-secondary
    responsive="sm"
    :items="coronaData"
      :fields="fields"
      large
      title= "Corona Virus All Over The World"
      table-variant="info"
      head-variant="dark"
    >
    </b-table> -->
<!-- </div> -->

</b-container>
</template>

<!-- 08/10/2022 Code that is being added to close the old project and start by adding some portfolio -->

<!-- <script>
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
</script> -->
