<template>
  <div class="home">
    <Top />
    <Classification />
  </div>
</template>

<script>
import Top from '../components/Carousel'
import Classification from '../components/Classification'

export default {
  name: 'Home',
  components:{
    Top,
    Classification,
  }
}
</script>
<style scoped>

</style>
