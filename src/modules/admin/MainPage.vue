<template>
  <TheNavbar></TheNavbar>
  <section>
    <router-view id="root-app"></router-view>
  </section>
  <TheContact></TheContact>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheNavbar from "../../components/TheNavBar.vue";
import TheFooter from "../../components/TheFooter.vue";
import TheContact from "../../components/TheContact.vue";

</script>

<style>

</style>