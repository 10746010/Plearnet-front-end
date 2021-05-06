<template>
  <div class="user">
    <div class="user-button">
      <Button />
    </div>
    <div class="content">      
      <h1>Hi</h1>
      <h1>Here</h1>
      <h1>is</h1>
      <h1>History</h1>
    </div>    
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "History",
  components: {
    Button,
  },
};
</script>
<style scoped>
.content {
  display: flex;
  /* justify-content: space-between; */
  /* padding: 200px; */
}
.content > div {
  color: white;
  font-size: 100px;
}
</style>