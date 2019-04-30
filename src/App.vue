<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/apartments">Apartments</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway');
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

.nav {
  display: flex;
  justify-content: center;
  background-color: #000;
  padding: 1.4rem;
  border-bottom: 0.2rem solid #000;
  a {
    margin: 0 0.4rem;
    font-weight: bold;
    color: #FFF;
    text-decoration: none;
    &.router-link-exact-active {
      color: #04BAB3;
      text-decoration: none;
    }
  }
}
</style>
