<template>
  <main>
    <TheNavbar></TheNavbar>
    <section id="root-app">
      <router-view></router-view>
    </section>
  </main>
  <TheContact></TheContact>
  <TheFooter></TheFooter>
</template>

<script setup>
import TheNavbar from "../../components/TheNavBar.vue";
import TheFooter from "../../components/TheFooter.vue";
import TheContact from "../../components/TheContact.vue";

</script>

<style>
#root-app {
  background-color: var(--main-primary-bg-color);
  height: 500px;
  padding: 0px;
}
</style>