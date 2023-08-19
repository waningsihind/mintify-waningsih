<template>
  <div>
    <v-container
      fluid
      style="
        background-image: url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-virtual-background-_Tcjok-d9b4.jpg');
      "
    >
      <h1 class="my-10" style="color: #3d6647; text-align: center">
        Contact Us
      </h1>
      <v-row>
        <v-col cols="4">
          <v-card class="ml-10" elevation="2">
            <v-card-text>
              <h3 class="text-h6" style="color: #3d6647; text-align: center">
                HEADQUARTER
              </h3>
              <p></p>
              <p>Address:</p>
              <p>
                Jl. Serafin Utara VI No. 91<br />
                Blok B3, Ruko Akasia<br />
                Tangerang 15200
              </p>
              <p>✉ bussiness.info@mintify.com</p>
              <p>☏ (021) 80880880</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card class="mx-auto" width="800">
            <v-card-title
              class="text-h6"
              style="color: #3d6647; justify: center"
            >
              GET IN TOUCH TODAY
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="submitForm">
                <v-text-field
                  v-model="fullname"
                  label="Full Name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="number"
                  label="Phone Number"
                  type="number"
                  min="0"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="subject"
                  label="Region"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="message"
                  label="How can we help you?"
                  required
                ></v-textarea>
                <v-radio-group v-model="contactMethod" row>
                  <v-radio
                    v-for="method in contactMethods"
                    :key="method.value"
                    :label="method.label"
                    :value="method.value"
                  ></v-radio>
                </v-radio-group>
                <v-btn type="submit" color="primary" :disabled="!formIsValid">
                  Submit
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      number: null,
      subject: "",
      message: "",
      contactMethod: "",
      contactMethods: [
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
      ],
    };
  },
  computed: {
    formIsValid() {
      return (
        this.fullname &&
        this.email &&
        this.number !== null &&
        this.subject &&
        this.message &&
        this.contactMethod
      );
    },
  },
  methods: {
    submitForm() {
      if (!this.formIsValid) {
        return;
      }
      let contactInfo = "";
      if (this.contactMethod === "email") {
        contactInfo = `Email: ${this.email}`;
      } else if (this.contactMethod === "phone") {
        contactInfo = `Phone: ${this.number}`;
      }
      alert(
        `Thank You! We will reach you as soon as possible.\n\n${contactInfo}`
      );
    },
  },
};
</script>

<style scoped>
.contact {
  border-top: 50px;
  border-bottom: 50px;
}
</style>
