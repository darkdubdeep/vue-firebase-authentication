<template>
<div class="login">
    <div 
    v-if="loginProcessSarted === true" 
    class="login-spinner-container">
      <img 
      src="./../assets/login-spinner.gif" 
      class="vue-logo">
      </div>
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
      password: '',
      loginProcessSarted: false
    };
  },
  methods: {
    signIn: function() {
      this.loginProcessSarted = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace('hello');
          },
          err => {
            alert('wrong data');
            this.loginProcessSarted = false;
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
  border: solid rgba(66, 185, 131, 0.3);
}
input:focus {
  border: solid rgba(66, 185, 131, 0.5) !important;
  outline: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
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
  text-decoration: none;
  cursor: pointer;
  color: #42b983;
  transition: 0.3s;
}
p a:hover {
  color: #0e7a55;
}
p a:visited {
  color: #42b983;
}

.login-spinner-container {
  width: 90%;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 50%;
  position: absolute;
  background: #fff;
}
</style>