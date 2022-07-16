<template>
  <div class="content-box">
    <div class="product-info">
      <div class="product-image">
        <img src="../../assets/img/item.png" alt="">
      </div>
      <div class="product-desc">
        <h1 class="text-[48px] font-[600] text-[#464646] pb-3">Produto XYZ</h1>
        <p class="text-[18px] font-[600] text-[#464646] pb-3">R$ 60,00</p>
        <p class="text-[14px] font-[400] text-[#464646] pb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim rem cumque dolore, quas fuga provident quisquam iusto tenetur deleniti a voluptate maiores commodi odit incidunt voluptatem nostrum molestiae adipisci quae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim rem cumque dolore, quas fuga provident quisquam iusto tenetur deleniti a voluptate maiores commodi odit incidunt voluptatem nostrum molestiae adipisci quae?</p>
        <button title="Adicionar ao carrinho" class="primary-button w-full mb-3 hover:bg-[#f15ada]">Adicionar ao carrinho</button>
      </div>

      <div class="product-action">
      </div>
    </div>

    <div class="content">
      <h1 class="title w-[150px]">same category</h1>
    </div>

    <div class="product-list">
      <TheCard></TheCard>
      <TheCard></TheCard>
      <TheCard></TheCard>
      <TheCard></TheCard>
      <TheCard></TheCard>
    </div>
  </div>

</template>

<script setup>
  import TheCard from '../../components/TheCard.vue';
</script>

<style scoped>
.product-info {
  display: flex;
}
.product-info .product-image {
  margin-right: 15px;
}
.product-info .product-image img {
  max-width: 700px;
  height: 400px;
}
.product-info .product-desc {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>