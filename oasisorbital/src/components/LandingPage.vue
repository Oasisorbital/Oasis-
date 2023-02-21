<template>
<div>
  <div class="hero min-h-screen" :style="{ backgroundImage: 'url(' + require('@/assets/300.jpg') + ')' }">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-primary-content">
      <div class="max-w-xl p-4 lg:p-0">
        <img src="@/assets/logo12.png">
        <p class="pt-10 pb-4 font-semibold text-lg  font-mono ">Take your brand out of this world and to the stratosfare</p>
        <p class="pb-10 font-semibold text-lg  font-mono ">Stand out above the rest by launching your product to the edge of space</p>

        
        <!-- The button to open modal -->
        <label for="my-modal-4" class="btn btn-accent modal-button">Launch!</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-4" class="modal-toggle" />
        <label for="my-modal-4" class="modal cursor-pointer">
          <label class="modal-box relative" for="">
            
            <div v-if="!success">
            <div class="text-3xl mb-6 text-center ">
                Enter your details
            </div>

            <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">

                <div class="col-span-2 lg:col-span-1">
                    <input type="text" v-model="name" v-bind:class="{ 'input-error': nameError}" placeholder="Name" class="input input-bordered w-full " />
                    <div v-bind:key="4" v-show="nameError"
                         class="text-red-600">
                        Name can't be empty
                    </div>
                </div>

                <div class="col-span-2 lg:col-span-1">
                    <input type="text" v-model="email" v-bind:class="{ 'input-error': emailError}" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                    <div v-bind:key="4" v-show="emailError"
                         class="text-red-600">
                        Email Invalid
                    </div>
                </div>

                <!-- <div class="col-span-2 lg:col-span-1">
                    <input type="text" v-model="phone" v-bind:class="{ 'input-error': phoneError}" placeholder="Contact Number" class="input input-bordered w-full max-w-xs" />
                    <div v-bind:key="4" v-show="phoneError"
                         class="text-red-600">
                        Contact number cant be empty
                    </div>
                </div> -->

                <div class="col-span-2">
                    <textarea cols="30" rows="8" v-model="message" v-bind:class="{ 'textarea-error': messageError}"
                              class="textarea textarea-bordered w-full"
                              placeholder="Enquiry"></textarea>
                    <div v-bind:key="4" v-show="messageError"
                         class="text-red-600">
                        Please include an Enquiry
                    </div>
                </div>

                <div class="col-span-2 text-right">
                  <label @click="submitForm" class="btn btn-accent">
                    Submit
                  </label>
                </div>

            </div>
        </div>
        <div v-if="success">
            <div class="text-3xl mb-6 text-center">
                <strong>Thanks!</strong>
            </div>
            <div class="text-center text-xl mb-6">
                We will be in touch as soon as we can.
            </div>
        </div>


          </label>
        </label>

      </div>
    </div>
  </div>

  <footer class="footer items-center p-2 bg-transparent text-neutral-content fixed bottom-0">
      <div class="items-center grid-flow-col">
          <a href="https://www.linkedin.com/company/oasis-orbital-systems/?originalSubdomain=nz" target=”_blank”>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 34 34" class="fill-current m-2"><path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path></svg></a> 

          <a href="https://www.instagram.com/oasisorbital/" target=”_blank”>
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="fill-current m-2"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>

          <a href="https://www.youtube.com/channel/UC5RfW91hAX3iei_S3UOHaIQ" target=”_blank”>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" class="fill-current m-2"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      </div> 
      <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p>© 2022</p>
      </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    msg: String
  },
  data() {
    return {
      borderError: '2px solid red',
      name: "",
      email: "",
      message: "",
      // phone: "",
      nameError: false,
      messageError: false,
      emailError: false,
      // phoneError: false,
      emailErrorMessage: "",
      emailRegex: /^[\w!#$%&'+/=?`{|}~^-]+(?:\.[\w!#$%&'+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/,
      success: false

    }
  },
  methods: {
    toggleSuccess() {
      this.success = false;
    },
    validateEmail() {
      this.emailError = !this.emailRegex.test(this.email);
    },
    // validatePhone() {
    //   this.phoneError = this.phone.length <= 0;
    // },
    validateName() {
      this.nameError = this.name.length <= 0;
    },
    validateMessage() {
      this.messageError = this.message.length <= 0;
    },
    submitForm() {
      this.validateEmail();
      this.validateName();
      this.validateMessage();
      // this.validatePhone();
      if (!this.emailError && !this.nameError && !this.messageError) {
          let formatMessage = this.message.replaceAll(" ", "+");
          let formURL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSds2Ax444p5R1FgaoPHq5-dI7k72VqPy24v8SzKHkVcovO6jg/formResponse?usp=pp_url&entry.2146754130'
              + this.name + '&entry.807626674' + this.email + '&entry.393591088' + formatMessage + '&submit=Submit';

          fetch(formURL, {
              method: 'GET',
              mode: 'no-cors',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          })
          this.success = true;
      }
    }
  },
}
</script>

<style scoped>
</style>
