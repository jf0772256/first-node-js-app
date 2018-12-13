<template>
  <div>
    <h1>Register</h1>

    <input type="text" name="name" id="name" placeholder="name" v-model="name"><br>
    <input type="text" name="email" placeholder="email" id="email" autocomplete="off" v-model="email"><br>
    <input type="password" name="password" id="password" autocomplete="off" v-model="password"><br>
    <button name="submit" id="submit" @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        name: this.name,
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
