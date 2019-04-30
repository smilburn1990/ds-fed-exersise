<template>
  <div class="home">
    <img class="home__logo" alt="DisplaySweet logo" src="../assets/images/displaysweet-logo.svg">
  </div>
</template>

<script>

export default {
  name: 'home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__logo {
    margin-top: 10rem;
    width: 80%;
  }
}
</style>