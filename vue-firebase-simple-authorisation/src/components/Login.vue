<template>
<div class="login">
    <h5>Sign in</h5>
    <input type="text" v-model="email" placeholder="Email"> <br>
    <input type="password" v-model="password" placeholder="Password"> <br>
    <button @click="signIn()">Connetction</button>
    <p>You dont`t have account? <router-link to='/sign-up'> You can create one!</router-link> </p>
</div>
</template>
<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('hello');
          },
          err => {
            alert('wrong data');
          }
        );
    },
    goToWellkomePage: function() {
      this.$router.replace('hello');
    }
  }
};
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  padding: 20px;
  margin-top: 10px;
  width: 150px;
  background: #42b983;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  outline: 0;
  cursor: pointer;
  transition: 0.3s;
  border: none;
}
button:hover {
  -webkit-box-shadow: -1px 4px 56px 1px rgba(66, 185, 131, 0.53);
  -moz-box-shadow: -1px 4px 56px 1px rgba(66, 185, 131, 0.53);
  box-shadow: -1px 4px 56px 1px rgba(66, 185, 131, 0.53);
}
p {
  margin-top: 30px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>