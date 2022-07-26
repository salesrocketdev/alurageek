<template>
  <div class="container-login">
    <div class="container-login-card">
      <div class="login-title">
        <h1>Painel Administrativo</h1>
      </div>
      <div class="login-form flex flex-col">
        <p class="form-title mb-5">Insira suas informações para acessar o painel...</p>

        <label class="form-label" for="email">Email</label>
        <input id="email" class="form-input w-full mt-3 mb-5" type="email" placeholder="insira seu email" v-model="loginModel.email">

        <label class="form-label" for="password">Palavra chave</label>
        <input id="password" class="form-input w-full mt-3 mb-3" type="password" placeholder="insira sua palavra chave" v-model="loginModel.password">

        <p v-if="isLoginInvalid" class="text-center text-[12px] text-red-600">Insira um e-mail e senha válidos</p>
        <p v-if="store.state.loginStore.isInvalid" class="text-center text-[12px] text-red-600">{{store.state.loginStore.loginWarning}}</p>

        <button title="Conectar-se" class="primary-button w-full mb-3 hover:bg-[#f15ada]" @click="login()">Conectar-se</button>
        <router-link to="/home">
          <button title="Voltar" class="primary-button w-full hover:bg-[#f15ada]" type="button">Voltar para loja</button>
        </router-link>
      </div>
      <div class="login-footer flex items-center justify-center">
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
  let isLoginInvalid = ref(false);

  const store = useStore();
  const router = useRouter();

  function login() {
    if (loginModel.value.email == null || loginModel.value.password == null) {
      isLoginInvalid.value = true;
      setTimeout(() => isLoginInvalid.value = false, 3000);
    } else {
      store.commit('loginStore/storeLogin', loginModel);

      store.dispatch("loginStore/post", store.state.loginStore.login).then(response => {
        if(response.success){
          localStorage.clear();
          localStorage.setItem('token', 'bearer ' + response.token);
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('role', response.data.role);
          localStorage.setItem('isAuthenticated', response.success);

          store.commit('loginStore/storeIsLogged', response.success);
          store.commit('loginStore/storeIsLoginInvalid', false);

          console.log('Usuário conectado.');

          router.push('admin/panel');
        }else {
          store.commit('loginStore/storeLoginWarning', response.errors);
          store.commit('loginStore/storeIsLoginInvalid', true);

          setTimeout(() => store.commit('loginStore/storeIsLoginInvalid', false), 3000);
        }
      });
    }
  }
</script>

<style scoped>
.container-login {
  height: 100vh;
  background-color: #b7d5ff;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container-login-card {
  width: 30%;
  padding: 10px;
  background-color: var(--main-secondary-bg-color);
  border-radius: 10px;
}
.login-title {
  padding-top: 25px;
}
.login-title h1 {
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
  font-weight: 500;
  font-size: 14px;
  color: #6d6d6d;
}
.login-form {
  padding: 40px 15px 15px 15px;
}
.login-footer {
  position: initial;
}

@media only screen and (min-width: 280px) and (max-width: 740px) {
  .container-login {
    display: block;
  }
  .container-login-card {
    position: absolute;
    top: 15%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    width: 100%;
    padding: 20px;
    background-color: var(--main-secondary-bg-color);
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
  }
  .login-footer {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
  }
}
</style>