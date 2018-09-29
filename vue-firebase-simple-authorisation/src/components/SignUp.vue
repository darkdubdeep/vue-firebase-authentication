<template>
    <div class="sign-up">
        <p>Lets's create a new account !</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="createAccount()">Sign up</button>
        <span>or go back to <a><router-link to="/login">login</router-link></a>.</span>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'singUp',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    createAccount: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert('Your account has been created !');
          },
          err => {
            alert(err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.signUp {
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
  border: none;
  transition: 0.3s;
}
button:hover {
  -webkit-box-shadow: -1px 4px 56px 1px rgba(66, 185, 131, 0.53);
  -moz-box-shadow: -1px 4px 56px 1px rgba(66, 185, 131, 0.53);
  box-shadow: -1px 4px 56px 1px rgba(0, 241, 133, 0.53);
}
span {
  display: block;
  margin-top: 30px;
  font-size: 13px;
}

span a {
  text-decoration: none;
  cursor: pointer;
  color: #42b983;
  transition: 0.3s;
}
span a:hover {
  color: #0e7a55;
}
span a:visited {
  color: #42b983;
}
</style>