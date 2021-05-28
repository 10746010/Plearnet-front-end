<template>
  <div class="update" :class="{ '--exceeded': newUpdateCharacterCount > 25 }">
    <form @submit.prevent="update" name="formUpdate">
      <!-- 輸入標題跟描述和上傳按鈕 -->
      <div class="update_box">
        <!-- 輸入標題跟描述 -->
        <div class="input_box">
          <!-- 輸入標題 -->
          <div class="input">
            <input id="input" v-model="text" placeholder="輸入標題" required />
          </div>
          <!-- 描述 -->
          <div class="updateContent">
            <label for="updateCharacterCount"
              >{{ newUpdateCharacterCount }}/25</label
            >
            <textarea
              id="updateContent"
              rows="4"
              v-model="newUpdateContent"
              placeholder="描述"
            ></textarea>
          </div>
        </div>
        <!-- 上傳 -->
        <div class="button">
          <Button color="rgba(56,14,201,255)" text="上傳" />
        </div>
      </div>
      <!-- 四種功能 -->
      <div class="insert">
        <img v-bind:src="insert_video" alt="" />
        <img v-bind:src="insert_image" alt="" />
        <img v-bind:src="insert_file" alt="" />
        <img v-bind:src="insert_text" alt="" />
      </div>
      <!-- 預覽 -->
      <div class="preview">
        {{ newUpdateContent }}
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Update",
  data() {
    return {
      text: "",
      newUpdateContent: "",
      insert_image: require("../../static/img/insert_image.png"),
      insert_file: require("../../static/img/insert_file.png"),
      insert_text: require("../../static/img/insert_text.png"),
      insert_video: require("../../static/img/insert_video.png"),
    };
  },
  computed: {
    newUpdateCharacterCount() {
      return this.newUpdateContent.length;
    },
  },
  props: {},
  components: {
    Button,
  },
};
</script>
<style scoped>
.update {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.update.--exceeded {
  color: red;
}

.update.--exceeded .update_box .btn {
  background-color: red !important;
  color: white;
  pointer-events: none !important;
}

.update_box {
  display: flex;
}
.input_box {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0px;
  right: 300px;
}
.updateContent {
  display: flex;
  flex-direction: column;
}
#updateContent {
  background-color: transparent;
  border: none;
  border-color: white;
  border-bottom-style: solid;
  outline: none;
  color: white;
  height: 60px;
  width: 500px;
  font-size: 3em;
}

#input {
  background-color: transparent;
  border: none;
  border-color: white;
  border-bottom-style: solid;
  outline: none;
  color: white;
  height: 60px;
  font-size: 2.5em;
}

::placeholder {
  color: #f8fc8e;
  font-weight: bold;
}
.btn {
  color: #f9f77c;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 30px;
  font-size: 30px;
  width: 150px;
  height: 60px;
  border: 2px #d1a72e solid;
  position: relative;
  top: 75px;
  text-align: center;
}
.insert {
  position: relative;
  right: 315px;
}
.insert > img {
  width: 150px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px #e9f4ac solid;
  border-radius: 20px;
}
.preview {
  position: relative;
  right: 300px;
  background-color: white;
  border-radius: 20px;
  width: 800px;
  height: 300px;
  color: black;
  padding: 5px;
}
</style>