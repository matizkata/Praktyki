<template>
  <div>
    <topBar id="topbar"></topBar>
    <sideMenu id="sidemenu"></sideMenu>
    <div id="content">
      <contentPage id="contentPage"></contentPage>
    </div>
    <ftr id="ftr"></ftr>
  </div>
</template>

<script>
import sideMenu from './components/sideMenu';
import topBar from './components/topBar';
import ftr from './components/ftr';
import contentPage from './components/contentPage';


export default {
  name: 'App',
  components: {
    sideMenu,
    topBar,
    ftr,
    contentPage
  }
};
</script>

<style>
#content{
margin-left: 200px;
}
</style>
