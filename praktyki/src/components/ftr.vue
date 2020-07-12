<template>
<div class="container-fluid p-0 dol">
<div class="stopka"></div>
</div>
</template>



<script>
export default {
name: 'ftr'
}
</script>


<style>

.dol{
  align-items: flex-end;
}
.stopka{
  align-self:flex-end;
  height: 70px;
  width: 100%;
  position: absolute;
  bottom:0;
  z-index: 80;
  background-color: #023a5c;
}
</style>
