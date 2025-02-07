<template>
  <h2 class="text-center mt-5 mb-3">Create New Quote</h2>
  <div class="card">
      <div class="card-header">
          <NuxtLink 
              class="btn btn-outline-info float-right"
              to="/">View All Quotes
          </NuxtLink>
      </div>
      <div class="card-body">
          <form>
              <div class="form-group">
                  <label htmlFor="quote">Quote</label>
                  <input 
                      v-model="quote"
                      type="text"
                      class="form-control"
                      id="quote"
                      name="quote"/>
              </div>
              <button 
                  @click="handleSave()"
                  :disabled="isSaving"
                  type="button"
                  class="btn btn-outline-primary mt-3">
                  Save Quote
              </button>
          </form>
      </div>
  </div>
</template>
  
<script>
 
import Swal from 'sweetalert2'
import { createQuote } from '~/services/quoteService';
  
export default {
  data() {
    return {
      quote: '',
      isSaving:false,
    };
  },
  methods: {
    handleSave() {
        this.isSaving = true
        console.log(this.quote)
        createQuote(this.quote)
          .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'quote saved successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            this.isSaving = false
            this.quote = ''
            return response
          })
          .catch(error => {
            this.isSaving = false
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            return error
          });
    },
  },
};
</script>