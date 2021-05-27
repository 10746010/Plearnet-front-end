<template>
  <!-- Wish.vue -->
  <div class="wish">
    <form @submit.prevent="wish" name="formWish">
      <div class="input">
        <input
          id="input"
          v-model="text"
          placeholder="希望增設的科目"
          required
        />
      </div>

      <div class="wanna">
        <textarea
          id="wanna"
          v-model="message"
          placeholder="詳細描述想增設的理由"
        ></textarea>
      </div>

      <div class="button">
        <Button @click.prevent="send" color="rgb(243, 235, 121)" text="送出" />
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Wish",
  methods: {
    send() {
     alert('已送出');
    },
  },
  components: {
    Button,
  },
};
</script>
<style scoped>
.wish {
  display: flex;
  flex-direction: column;
}
.input {
  margin: 0px 0px 10px 20px;
}
#input {
  border-radius: 9px;
  width: 450px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.8);
}
.wanna {
  margin: 10px 0px 0px 20px;
}
#wanna {
  border-radius: 9px;
  width: 450px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.8);
}

.button {
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 200px;
}
</style>