<template>
  <div id="nav">
    <ul class="navbar">
      <li><router-link to="/" tag="button">Projects</router-link></li>
      <li><router-link to="/About" tag="button">About</router-link></li>
      <li><router-link to="/Contact" tag="button">Contact</router-link></li>
    </ul> 
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  props: {
  },
  components: {
  }
}
</script>

<style>
html {
  background-color: rgb(32, 32, 32);

  background-image: linear-gradient(rgba(241, 241, 241, 0.02) 1px, transparent 0%),
    linear-gradient(90deg, rgba(241, 241, 241, 0.02) 1px, transparent 0%),
    linear-gradient(rgba(0, 255, 255, 0.02) 1px, transparent 1%),
    linear-gradient(90deg, rgba(0, 255, 255, 0.02) 1px, transparent 1%);
    
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px; /* changes "size" of squares */

  scrollbar-color: rgb(50, 50, 50) rgb(32, 32, 32);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#nav{
  position: fixed;
  top: 0;
  left: 0vw;
  margin: 0px 0px;
  width: 100vw;
  height: 34px;
  color: white;
  background-color: rgba(60, 60, 60, 1);
}
.navbar {
  list-style-type: none;
  margin: 0px 0px 0px 20vw;
  padding: 0;
}
.navbar li {
  float:left;
  margin: 0px 20px 0px 0px;
  padding: 7px 6px;
  user-select: none;
}
.navbar li a{
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
}
.navbar li a:hover{
  border-bottom: solid cyan 2px;
  
  display: inline-block;
  line-height: 20px;
}
ul,li,div,h4,p{
  font-family: evesans;
}
</style>
