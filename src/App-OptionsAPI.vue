<!-- options api -->

<script>
  export default {
    data(){
      return {
        name: 'John Doe',
        status: 'active',
        tasks: ['Task 1', 'Task 2', 'Task 3'],
        link: "https://google.com"
      }
    },

    methods: {
      toggleStatus(){
        if(this.status === 'active'){
          this.status = 'pending';
        }
        else if(this.status === 'pending'){
          this.status = 'inactive'
        }
        else{
          this.status = 'active'
        }
      }
    }

  }
</script>

<template>
  <h1>{{name}}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task"> {{ task }}</li>
  </ul>
  <a :href="link">CLick</a>
  <button @click="toggleStatus">Change Status</button>
</template>

<style scoped>

</style>