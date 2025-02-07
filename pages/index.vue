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
                            <button 
                                @click="handleDelete(quote.id)"
                                className="btn btn-outline-danger mx-1">
                                Delete
                            </button>
                          </td>
                      </tr>                         
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>
  
<script>
import { deleteQuote, getQuotes } from '~/services/quoteService'
import Swal from 'sweetalert2'

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
    },
    handleDelete(id){
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
          deleteQuote(id)
            .then( response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Quote deleted successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.fetchQuoteList();
                return response
            })
            .catch(error => {
                Swal.fire({
                      icon: 'error',
                    title: 'An Error Occured!',
                    showConfirmButton: false,
                    timer: 1500
                })
                return error
            });
        }
      })
    }
  }
};
</script>