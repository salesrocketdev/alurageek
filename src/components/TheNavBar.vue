<template>
  <div id="outside" class="outside"></div>
  <header class="header" id="myTopnav">
    <nav>     
      <div class="header-logo">
        <img class="header-icon" src="../assets/logo.svg" alt="Flamingo">
      </div>

      <ul class="header-list">
        
      </ul>        

      <div class="header-action">
        <router-link to="/home">
          <button class="primary-button" type="button">Home Page</button>
        </router-link>
                
        <router-link to="/product">
          <button class="secondary-button" type="button">Menu Administrador</button>
        </router-link>

        <router-link to="/login">
          <button class="secondary-button" type="button">Login</button>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 20px;
}
nav {
  padding: 0px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>