<template>
  <!-- Udate.vue -->
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
    </form>
    <!-- 預覽 -->
    <div class="preview_box">
      <div class="upload">
        <button
          :style="{
            backgroundImage: 'url(' + preview + ')',
            backgroundSize: '150px 100px',
            backgroundRepeat: 'no-repeat',
          }"
          class="preview_img"
        >
          <input
            type="file"
            id="uppic"
            accept="image/*"
            @change="previewImage"
            class="uppic"
          />
        </button>
      </div>
      <!-- <div class="content_box">  -->
      <textarea
        :value="newUpdateContent"
        placeholder="筆記預覽"
        class="content_box"
      />
      <!-- {{ newUpdateContent }}         -->
      <!-- </div> -->
    </div>
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
      preview: require("../../static/img/insert_image.png"),
      image: null,
    };
  },

  methods: {
    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
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
  top: 85px;
  left: 90px;
  text-align: center;
}
/* .insert {

} */
.insert > img {
  width: 150px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px #e9f4ac solid;
  border-radius: 20px;
}
.preview_box {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  width: 800px;
  height: 500px;
  color: black;
  z-index: 0;
}

.upload {
  margin: 10px;
}
.uppic {
  height: 6rem;
  width: 9rem;
  margin: 0px 0px 0px -5px;
  opacity: 0;
}

.preview_img {
  width: 150px;
  height: 100px;
}
.content_box {
  width: 700px;
  height: 350px;
  margin: 0px 0px 0px 10px;
  padding: 5px;
  background: #f5e17e;
}
.content_box::placeholder {
  color: #00135e;
  font-size: 5em;
  font-weight: bold;
  text-align: center;
}
</style>