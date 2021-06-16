<template>
  <!-- Wish.vue -->
  <div class="wish" :class="{ '--exceeded': newWishCharacterCount > 50 }">
    <form @submit.prevent="wish" name="formWish" >
      <div class="input">
        <input
          id="input"
          v-model="text"
          placeholder="希望增設的科目"
          required
        />
      </div>

      <div class="wanna" >
        <label for="wanna" 
          >{{ newWishCharacterCount }}/50</label
        >

        <textarea
          id="wanna"
          v-model="newWishContent"
          placeholder="詳細描述想增設的理由"
        ></textarea>
      </div>

      <div class="button">
        <Button @click.prevent="send" color="linear-gradient(90deg,#e5e603, #fff59b)" text="送出" />
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Wish",
  data() {
    return {
      text: "",
      newWishContent: "",
    };
  },
  methods: {
    send() {
      alert("已送出");
    },
  },
  computed: {
    newWishCharacterCount() {
      return this.newWishContent.length;
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
    color: white;
    position: relative;
    z-index: 1;
}
.wish.--exceeded{
    color: red;
}
.wish.--exceeded button{
    background-color: red!important;
    border: none;
    color: white;
    pointer-events: none;
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
    display: flex;
    flex-direction: column;
    margin: 10px 0px 0px 20px;
}
#wanna{
    border-radius: 9px;
    width: 450px;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.8);
}
.button{
    display: flex;
    justify-content: flex-end;
    position: relative;
    right: 200px;
}
.btn{
  border-radius: 30px;
}
</style>
