<script>
export default {
  name: "Contact",
  data(){
    return {
      errors: [],
      myForm:{
        name: null,
        phone: null,
        email: null,
        message: null,
      }
    }
  },
  methods:{
    addMessage(e){
      e.preventDefault();

      this.errors = [];

      if (!this.myForm.name) {
        this.errors.push('Name required.');
      }
      if (!this.myForm.phone) {
        this.errors.push('Phone required.');
      }
      if (!this.myForm.email) {
        this.errors.push('Email required.');
      }
      if (!this.myForm.message) {
        this.errors.push('Message required.');
      }

      if (this.errors.length){

      }else{
        this.$swal('form submit');
      }


      console.log(this.errors);
      console.log(this.myForm.name);
      console.log(this.myForm.phone);
      console.log(this.myForm.email);
      console.log(this.myForm.message);

    }
  }
}
</script>

<template>
  <div>
    <section class="contact_section  long_section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="form_container">
              <div class="heading_container">
                <h2>
                  Contact Us
                </h2>
              </div>
              <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="error in errors">{{ error }}</li>
                </ul>
              </p>
              <form action="" v-on:submit="addMessage" method="POST">
                <div>
                  <input type="text" placeholder="Your Name" v-model="myForm.name" />
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" v-model="myForm.phone" />
                </div>
                <div>
                  <input type="text" placeholder="Email" v-model="myForm.email" />
                </div>
                <div>
                  <input type="text" class="message-box" placeholder="Message" v-model="myForm.message" />
                </div>
                <div class="btn_box">
                  <button type="submit">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6">
            <div class="map_container">
              <div class="map">
                <div id="googleMap"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>