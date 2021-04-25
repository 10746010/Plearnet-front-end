<template>
  <div class="user">
    <div class="content">
      <div>Hi</div>
      <div>Here</div>
      <div>is</div>
      <div>History</div>
    </div>
    <div class="user-button">
      <Button />
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
  justify-content: space-between;
  padding: 200px;
}
.content > div {
  color: white;
  font-size: 100px;
}
</style>