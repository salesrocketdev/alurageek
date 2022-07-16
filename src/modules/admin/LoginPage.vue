<template>
  <div class="container__login">
    <div class="container__login--card">
      <div class="login__title">
        <h1>Painel Administrativo</h1>
      </div>
      <div class="login__form flex flex-col">
        <p class="form-title mb-5">Insira suas informações para acessar o painel...</p>

        <label class="text-[#444]" for="email">Email</label>
        <input id="email" class="form-input w-full mt-3 mb-5" type="email" placeholder="insira seu email" v-model="loginModel.email">

        <label class="text-[#444]" for="password">Palavra chave</label>
        <input id="password" class="form-input w-full mt-3 mb-[40px]" type="password" placeholder="insira sua palavra chave" v-model="loginModel.password">

        <button title="Conectar-se" class="primary-button w-full hover:bg-[#f15ada]" @click="login()">Conectar-se</button>
      </div>
      <div class="login__footer flex items-center justify-center">
        <img class="w-[128px] h-[64px]" src="../../assets/img/logo.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue'
  
  let loginModel = ref({});

  const store = useStore();
  const router = useRouter();

  function login() {
    store.commit('loginStore/storeIsLogged', true);
    router.push('home/');                

    store.dispatch("loginStore/post", loginModel).then(response => {
      if(response.success){
        localStorage.clear();
        localStorage.setItem('token', 'bearer ' + response.data.token);
        localStorage.setItem('name', response.data.name);
        localStorage.setItem('id', response.data.id);
    
        router.push('home/');                
      }else{
        console.log(response.error);
      }
    });
  }
</script>

<style scoped>
.container__login {
  height: 100vh;
  background-color: var(--main-secondary-bg-color);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container__login--card {
  width: 30%;
  padding: 10px;
  background-color: #b7d5ff;
  border-radius: 10px;
}
.login__title {
  padding-top: 25px;
}
.login__title h1 {
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: var(--main-primary-text-color);
  padding: 20px 10px;
}
.secondary-title {
  padding: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #A0A0A0;
}
.form-title {
  padding: 0px;
  font-weight: 600;
  font-size: 16px;
  color: #A0A0A0;
}
.login__form {
  padding: 40px 15px 15px 15px;
}
.login__footer {
  position: initial;
}

@media only screen and (min-width: 280px) and (max-width: 740px) {
  .container__login {
    display: block;
  }
  .container__login--card {
    position: absolute;
    top: 15%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    width: 100%;
    padding: 20px;
    background-color: var(--main-bg-color);
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
  }
  .login__footer {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>