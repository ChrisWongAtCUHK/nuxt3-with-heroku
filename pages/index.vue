<template>
  <div class="container">
      <h2 class="text-center mt-5 mb-3">Quotes</h2>
      <div class="card">
          <div class="card-header">
              <NuxtLink to="/create"
                  class="btn btn-outline-primary"
                  >Create New Quote
              </NuxtLink>
          </div>
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
                          <td>
                            <NuxtLink :to="`/show/${quote.id}`" class="btn btn-outline-info mx-1">Show</NuxtLink>
                            <NuxtLink :to="`/edit/${quote.id}`" class="btn btn-outline-success mx-1">Edit</NuxtLink>
                          </td>
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