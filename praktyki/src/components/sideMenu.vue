<template>
  <div class="pojemnikMenu" v-bind:class="{barIsHidden:isHidden}">
    <div class="pasekSchowaj">
      <div class="arrow" v-on:click="isHidden=!isHidden">
        <img src="/images/hide.gif">
      </div>
    </div>
    <div class="napisMenu">Menu</div>
    <div class="pozycjaMenu">Aktualności</div>
    <div class="pozycjaMenu">Branże</div>
    <div class="pozycjaMenu">Produkty</div>
    <div class="pozycjaMenu">Usługi</div>
    <div class="pozycjaMenu">Referencje</div>
    <div class="podkresNagl">Kontakt</div>
    <div class="pozycjaMenu">O firmie</div>
    <div class="pozycjaMenu">Nagrody</div>
    <div class="pozycjaMenu">Relacje inwestorskie</div>
    <div class="pozycjaMenu">Partnerzy</div>
    <div class="podkresNagl">Kariera</div>
    <div class="ikona">
      <img src="/images/icon-facebook.gif">
    </div>
    <div class="ikona">
      <img src="/images/icon-linkedin.gif">
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideMenu',
  data: function() {
    return {
      isHidden:false,
    }
  },

}
</script>

<style>
.pojemnikMenu{
  transition: transform .4s;
  /* padding-top:100px; */
  padding-left: 40px;
  background-color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 90;
  width:170px;
  height: 100%;
}
.pasekSchowaj{
  height: 100%;
  width: 30px;
  position:absolute;
  left:170px;
  box-shadow: 1px 7px  rgba(0, 0, 0, .5);
  background-color: white;
  text-align: center;
  padding-top:50%;
}
.napisMenu{
  margin-top:100px;
  border-bottom: black dotted;
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.podkresNagl{
  border-bottom: black dashed;
  /* overflow: hidden; */
  /* display: inline-block; */
  padding-bottom: 15px;
  margin-bottom: 15px;
}
.podkresNagl:hover{
  text-decoration: underline;
}

.ikona{
  margin-top: 10px;
}
.pozycjaMenu{
  /* display: inline-block; */
}
.pozycjaMenu:hover
{
  text-decoration: underline;
}
.arrow
{
  position: absolute;
  top:50%;
}
.barIsHidden{
  transform:translateX(-170px);
}
</style>
