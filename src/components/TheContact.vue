<template>
  <div class="contact">
    <div class="contact-header">
      <img class="contact-header-icon" src="../assets/img/logo.svg" alt="Flamingo">
    </div>
    <div class="contact-info">
      <ul class="contact-info-list">
        <li>Quem somos nós</li>
        <li>Política de privacidade</li>
        <li>Programa fidelidade</li>
        <li>Nossas lojas</li>
        <li>Quero ser franqueado</li>
        <li>Anuncie aqui</li>
      </ul>
    </div>
    <div class="contact-form">
      <form action="">
        <h1>Fale Conosco</h1>

        <label class="form-label" for="name">Nome</label>
        <input class="form-input mt-[10px] mb-[20px]" id="name" type="text" placeholder="Digite seu nome...">

        <label class="form-label" for="message">Mensagem</label>
        <textarea class="form-input mt-[10px] mb-[10px]" id="message" rows="4" placeholder="Digite sua mensagem..."></textarea>

        <button title="Enviar Mensagem" class="primary-button">Enviar Mensagem</button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style>
.contact {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 50px 0px;
  color: var(--main-primary-text-color);
  background-color: var(--main-secondary-bg-color);
}

.contact-info .contact-info-list li {
  padding: 15px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
.contact-info .contact-info-list li:hover {
  color: var(--main-primary-button-text);
}
.contact-form {
  padding: 10px;
  width: 450px;
}
.contact-form form {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}
.contact-form form h1 {
  padding: 0px 0px 10px 0px;
}

</style>