<template>
  <div class="item-info mb-5">
    <div class="item-image mb-2">
      <img src="../assets/img/item.png" alt="">        
    </div>

    <div class="item-desc">
      <p class="font-[500] text-[16px]">Produto XYZ</p>
      <p class="font-[700] text-[16px]">R$ 60,00</p>
      <p class="font-[500] text-[16px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>

    <div class="item-action flex flex-col">
      <button class="primary-button" @click="handlerOpen()">ver produto</button>      
    </div>
  </div>
</template>

<script setup>
  
</script>

<style scoped>
.item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 170px;
  margin-right: 10px;
}

.item-info .item-title {
  display: flex;
  width: 100%;
}

.item-info .item-title p, .item-desc p {
  padding: 5px;
  padding-left: 0px;
  color: var(--main-primary-text-color);
}

.item-info .item-title p:nth-child(2){
  margin-left: auto;
}
.item-info .item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-weight: 600;
  padding: 10px 10px 0px 10px;
  color: var(--main-primary-text-color);
}
</style>