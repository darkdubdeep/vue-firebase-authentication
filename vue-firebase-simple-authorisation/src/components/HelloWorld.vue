<template>
  <div class="hello">
    <h2>Welcome to homepage</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('login');
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-top: 50px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  padding: 20px;
  margin-top: 100px;
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
</style>
