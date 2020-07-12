<template>
<div class="container p-0 pojemnik">
  <div class="d-flex w-100 justify-content-center align-items-center pasekNaglowka">
    <img src="/images/icon-home.gif">
    <h2 class="text-nowrap ml-3">O FIRMIE</h2>
  </div>
  <div class="row zawartosc">
    <div class="col">

    </div>
    <div class="col"></div>
  </div>
</div>

</template>

<script>
export default {
  name: 'contentPage'
}
</script>

<style>
.pasekNaglowka{
  position: relative;
  top: 70px;
  padding-left: 50%;
  padding-right: 50%;
  border-bottom: dotted black;
  padding:20px;
}

.zawartosc{
  position: relative;
  top:200px;
}
</style>
