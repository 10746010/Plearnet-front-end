<template>
  <div class="user">
    <div class="content">
      <Self />
    </div>
    <!-- <router-view/>  -->
    <div class="user-button">
      <Button />
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import Self from '../components/Self'


export default {
  name: 'User',
  components:{
    Button,
    Self
  },

}
</script>
<style scoped>

</style>
