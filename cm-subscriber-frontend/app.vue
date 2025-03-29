<template>
  <div>
    <h1>Create Subscriber</h1>
    <form @submit.prevent="createSubscriber">
      <input v-model="name" placeholder="Name" required />
      <input v-model="email" placeholder="Email" required />
      <input v-model="phone" placeholder="Phone Number" required />
      
      <h3>Select SIM Type:</h3>
      <label><input type="checkbox" v-model="simType" value="Wholesale" /> Wholesale</label>
      <label><input type="checkbox" v-model="simType" value="Postpaid" /> Postpaid</label>
      <label><input type="checkbox" v-model="simType" value="Prepaid" /> Prepaid</label>

      <h3>Number of Subscribers: {{ subscriberCount }}</h3>
      <input type="range" v-model="subscriberCount" min="1" max="30" />

      <input v-model="iccid" placeholder="ICCID" required />

      <button type="submit">Create Subscriber</button>
    </form>

    <p v-if="message">{{ message }}</p> <!-- Show order status -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      simType: [],
      subscriberCount: 1,
      iccid: '',
      message: '',
    };
  },
  methods: {
    async createSubscriber() {
      try {
        const response = await axios.post(
          'http://localhost:4000/create-subscriber',
          {
            name: this.name,
            email: this.email,
            phone: this.phone,
            simType: this.simType,
            subscriberCount: this.subscriberCount,
            iccid: this.iccid
          }
        );

        this.message = response.data.message; // "Waiting for 1 min..."
        
        // Check for order completion after 1 min
        setTimeout(async () => {
          this.message = "✅ Order Created Successfully!";
        }, 60000);

      } catch (error) {
        this.message = '❌ Error: ' + error.response?.data?.message || error.message;
      }
    },
  },
};
</script>
