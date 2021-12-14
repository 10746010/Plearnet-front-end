<template>
  <!-- Wish.vue -->
  <div class="wish" :class="{ '--exceeded': newWishCharacterCount > 50 }">
    <h1>許願池</h1>
    <div class="wishbg">
      <div class="widh__box">
        <input
          class="wanna-wish"
          placeholder="筆記"
          @click.prevent="note"
          readonly
        />
        <input
          class="wanna-wish"
          placeholder="分類"
          @click.prevent="type"
          readonly
        />
      </div>

      <form @submit.prevent="wish" name="formWish" class="form-wish">
        <div class="input">
          <input
            id="input"
            v-model="text"
            :placeholder="'希望增設的' + wannaWish"
            required
          />
        </div>

        <div class="wanna">
          <label for="wanna">{{ newWishCharacterCount }}/50</label>

          <textarea
            id="wanna"
            v-model="newWishContent"
            placeholder="詳細描述想增設的理由"
          ></textarea>
        </div>

        <div class="button">
          <Button
            @click.prevent="send"
            color="linear-gradient(90deg,#e5e603, #fff59b)"
            text="送出"
          />
        </div>
      </form>
    </div>
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
      wannaWish: "筆記",
    };
  },
  methods: {
    send() {
      alert("已送出");
    },
    note() {
      this.wannaWish = "筆記";
    },
    type() {
      this.wannaWish = "分類";
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
.wish.--exceeded {
  color: red;
}
.wish.--exceeded button {
  background-color: red !important;
  border: none;
  color: white;
  pointer-events: none;
}
.wish > h1 {
  margin: 0 0 0 20px;
}

.widh__box {
  display: flex;
  justify-content: space-evenly;
}
/* 希望增設的項目 */
.wanna-wish:nth-child(1) {
  width: 30px;
  height: 35px;
  position: relative;
  top: -50px;
  border: none;
  background-color: #0088ff;
}
.wanna-wish:nth-child(2) {
  width: 30px;
  height: 35px;
  position: relative;
  top: -50px;
  border: none;
  background-color: #ff9000;
}
.wanna-wish::placeholder {
  color: white;
}
/* 表單 */
.form-wish {
  position: relative;
  top: -30px;
}

/* 許願的背景 */
.wishbg {
  background-color: rgba(255, 255, 255, 0.432);
  width: 350px;
  height: 400px;
  border-radius: 30px;
  margin: 10px 0 0 20px;
  box-sizing: border-box;
  padding: 40px;
}
#input {
  border-radius: 9px;
  width: 260px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.432);
  border: none;
}
.wanna {
  display: flex;
  flex-direction: column;
}
#wanna {
  border-radius: 9px;
  width: 260px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.432);
  border: none;
}
.button {
  display: flex;
  justify-content: flex-end;
}
.btn {
  border-radius: 30px;
  padding: 0;
  width: 60px;
  height: 20px;
  border: 1px solid #4ca3af;
  text-align: center;
}
</style>
