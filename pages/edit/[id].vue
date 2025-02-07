<template>
  <h2 class="text-center mt-5 mb-3">Edit Quote</h2>
  <div class="card">
      <div class="card-header">
          <router-link 
              class="btn btn-outline-info float-right"
              to="/">View All quotes
          </router-link>
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
                  Save quote
              </button>
          </form>
      </div>
  </div>
</template>
  
<script>
 
import Swal from 'sweetalert2'
import { getQuote, updateQuote } from '~/services/quoteService';
 
export default {
 
  data() {
    return {
      quote: {
        name: '',
        description: '',
      },
      isSaving:false,
    };
  },
  created() {
    const id = this.$route.params.id;
    getQuote(id)
    .then(response => {
        let quoteInfo = response.data
        this.quote = quoteInfo
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
    handleSave() {
        this.isSaving = true
        const id = this.$route.params.id;
 
        updateQuote(id, this.quote)
          .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'quote updated successfully!',
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