<template>
  <div class="contact">
    <div class="contact-header">
      <img class="contact-header-icon" src="../assets/img/logo.svg" alt="Alura Geek">
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

</style>