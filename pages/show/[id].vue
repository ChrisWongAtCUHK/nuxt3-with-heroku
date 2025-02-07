<template>
  <h2 class="text-center mt-5 mb-3">Show Quote</h2>
  <div class="card">
      <div class="card-header">
          <router-link 
              class="btn btn-outline-info float-right"
              to="/">View All Quotes
          </router-link>
      </div>
      <div class="card-body">
          <b className="text-muted">Quote:</b>
          <p>{{quote.quote}}</p>
      </div>
  </div>
</template>
  
<script>
 
import Swal from 'sweetalert2'
import { getQuote } from '~/services/quoteService';
  
export default {
  data() {
    return {
      quote: {
        quote: '',
        description: '',
      },
    };
  },
  created() {
    const id = this.$route.params.id;
    getQuote(id)
    .then(response => {
        let quoteInfo = response.data
        this.quote.quote = quoteInfo
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
    })
  },
  methods: {
      
  },
};
</script>