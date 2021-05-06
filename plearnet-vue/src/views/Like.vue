<template>
  <div class="user">
     <div class="user-button">
      <Button />
    </div>
    <div class="content">
      <div>Hello</div>
      <div>Here</div>
      <div>is</div>
      <div>Like</div>
    </div>
   
  </div>
</template>

<script>
import Button from "../components/Button";

export default {
  name: "Like",
  components: {
    Button,
  },
};
</script>
<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  /* padding: 200px; */
}
.content > div {
  color: white;
  font-size: 100px;
}
</style>