<template>
  <div class="menuGorne">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <img id="logo" src="/images/logo.png">
        </div>
        <div class="col pr-1 menu">Aktualności</div>
        <div class="col menu">Branże</div>
        <div class="col menu">Produkty</div>
        <div class="col menu">Usługi</div>
        <div class="col menu">Referencje</div>
        <div class="col menu">Kontakt</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
name: 'topBar'
}
</script>

<style>

.menuGorne{
 background-color: #023a5c;
 overflow: visible;
 position: relative;
 z-index: 100;
 height: 88px;
}
#logo{
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  display: block;
  max-width: 100%;
}
.menu{
color:white;
line-height: 88px;
}
</style>
