<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/duel">Duel</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/phones">Phones</router-link> |
      <router-link to="/categories">Categories</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:500&display=swap');
@import 'assets/reset';

#app {
  text-align: center;
  color: #41414e;
}
</style>
