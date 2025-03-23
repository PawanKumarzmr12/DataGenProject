<template>
  <div>
    <h1>Create Subscriber</h1>
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Create Subscriber</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(
          'http://localhost:4000/create-subscriber',
          {
            name: this.name,
            email: this.email,
          }
        );
        alert('Subscriber created successfully!');
      } catch (error) {
        alert('Error creating subscriber: ' + error.message);
      }
    },
  },
};
</script>
