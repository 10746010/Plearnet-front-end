<template>
  <div class="home">
    <Header />
    <Top />
    <Classification />
  </div>
</template>

<script>
import Header from "../components/Header";
import Top from '../components/Carousel'
import Classification from '../components/Classification'

export default {
  name: 'Home',
  components:{
    Header,
    Top,
    Classification,
  }
}
</script>
<style scoped>

</style>
