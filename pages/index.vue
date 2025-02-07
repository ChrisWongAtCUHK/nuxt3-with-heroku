<template>
  <div class="container">
      <h2 class="text-center mt-5 mb-3">Quotes</h2>
      <div class="card">
          <div class="card-body">
              <table class="table table-bordered">
                  <thead>
                      <tr>
                          <th>Quote</th>
                      </tr>
                  </thead>
                  <tbody>                 
                      <tr v-for="quote in quotes" :key="quote.id">
                          <td>{{quote.quote}}</td>
                      </tr>                         
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>
  
<script>
import { getQuotes } from '~/services/quoteService'

export default { 
  data() {
    return {
      quotes:[]
    };
  },
   
  created(){
    this.fetchQuoteList()
  },
 
  methods:{
    fetchQuoteList() {       
      getQuotes()
        .then(response => {
            this.quotes = response.data;
            return response
        })
        .catch(error => {
          return error
      });
    }
  }
};
</script>