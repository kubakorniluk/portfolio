<script setup>
  import Header from '~/components/Header.vue';
</script>

<template>
  <Header></Header>
</template>

<style>
  @import url("~/assets/css/global.css");

  body {
    margin: 0;
    padding: 0;
    background-color: var(--dark);
  }
  /* .root {
    position: relative;
    width: 100%;
    height: auto;
    padding: 1rem 2rem;
    background-color: var(--dark);
    z-index: 991;
  } */
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  h1, p {
        margin: 0;
    }
  p {
    line-height: 2rem;
  }
</style>
