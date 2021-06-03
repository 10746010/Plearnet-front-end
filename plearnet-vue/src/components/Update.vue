<template>
  <!-- Udate.vue -->
  <div class="update" :class="{ '--exceeded': newPlearnetCharacterCount > 25 }">
    <form
      @submit.prevent="createNewPlearnet"
      name="formUpdate" 
    >
      <!-- 輸入標題跟描述和上傳按鈕 -->
      <div class="new-plearnet__box">
        <!-- 輸入標題跟描述 -->
        <div class="input_box">
          <!-- 輸入標題 -->
          <div class="new-plearnet__title">
            <input id="newPlearnetTitle" v-model="newPlearnetTitle" placeholder="輸入標題" required />
          </div>
          <!-- 描述 -->
          <div class="new-plearnet__content">
            <label for="plearnetCharacterCount"
              >{{ newPlearnetCharacterCount }}/25</label
            >
            <textarea
              id="newPlearnetContent"
              rows="4"
              v-model="newPlearnetContent"
              placeholder="描述"
            ></textarea>
          </div>
        </div>
        <!-- 上傳 -->
        <Button color="rgba(56,14,201,255)" text="上傳" />
      </div>
      <!-- 四種功能 -->
      <div class="insert">
        <img v-bind:src="insert_video" alt="" />
        <img v-bind:src="insert_image" alt="" />
        <img v-bind:src="insert_file" alt="" />
        <img v-bind:src="insert_text" alt="" />
      </div>

      <!-- 預覽 -->
      <div class="preview__box">
        <div class="upload">
          <button
            :style="{
              backgroundImage: 'url(' + preview + ')',
              backgroundSize: '150px 100px',
              backgroundRepeat: 'no-repeat',
            }"
            class="preview__img"
          >
            <input
              type="file"
              id="previeButton"
              accept="image/*"
              @change="previewImage"
              class="previe__button"
            />
          </button>
        </div>
        <textarea
         id="previewPlearnetContent"
          :value="newPlearnetContent"
          placeholder="筆記預覽"
          class="preview-plearnet__content"
        />
      </div>
      <div class="user-profile__plearnets-wrapper">
        <PlearnetItem
        v-for="plearnet in user.plearnets"
        :key="plearnet.id"
        :username="user.username"
        :plearnet="plearnet"
        />
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button";
import PlearnetItem from "./PlearnetItem"

export default {
  name: "Update",
  data() {
    return {
      

      insert_image: require("../../static/img/insert_image.png"),
      insert_file: require("../../static/img/insert_file.png"),
      insert_text: require("../../static/img/insert_text.png"),
      insert_video: require("../../static/img/insert_video.png"),
      preview: require("../../static/img/insert_image.png"),
      image: null,

      newPlearnetTitle: "",
      newPlearnetContent: "",
      user: {
        username: "test1",
        plearnets: [{ id: 1,title:"Plearnet learning", content: "Plearnets is Amazing!" }],
      },
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
    createNewPlearnet() {
      this.user.plearnets.unshift({
        id: this.user.plearnets.length + 1,
        title: this.newPlearnetTitle,
        content: this.newPlearnetContent,
      });
    },
  },
  computed: {
    newPlearnetCharacterCount() {
      return this.newPlearnetContent.length;
    },
  },
  props: {},
  components: {
    Button,
    PlearnetItem
  },
};
</script>
<style scoped>
/* 新增的文章 */
.user-profile__plearnets-wrapper{
  color:black
}
/* 整個畫面 */
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
/* 放標題、內容、按鈕的div */
.new-plearnet__box {
  display: flex;
}

/* 新的文章的標題的整體 */

.input_box {
  /* position: relative;
  top: 0px;
  right: 50px; */
}

/* 新增文章的標題 */
#newPlearnetTitle {
  background-color: transparent;
  border: none;
  border-color: white;
  border-bottom-style: solid;
  outline: none;
  color: white;
  height: 60px;
  font-size: 2.5em;
}

/* 新增文章的內容 */
.new-plearnet__content {
  display: flex;
  flex-direction: column;
}
#newPlearnetContent {
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

.insert > img {
  width: 150px;
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px #e9f4ac solid;
  border-radius: 20px;
}
/* 放預覽的整體 */
.preview__box {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  width: 800px;
  height: 500px;
  color: black;
  z-index: 0;
}

/* 上傳預覽圖片的按鈕 */
.upload {
  margin: 10px;
}
.previe__button {
  height: 6rem;
  width: 9rem;
  margin: 0px 0px 0px -5px;
  opacity: 0;
}
/* 預覽的圖片 */
.preview__img {
  width: 150px;
  height: 100px;
}

/* 預覽內容的地方 */
.preview-plearnet__content {
  width: 700px;
  height: 350px;
  margin: 0px 0px 0px 10px;
  padding: 5px;
  background: #f5e17e;
}
.preview-plearnet__content::placeholder {
  color: #00135e;
  font-size: 5em;
  font-weight: bold;
  text-align: center;
}
</style>