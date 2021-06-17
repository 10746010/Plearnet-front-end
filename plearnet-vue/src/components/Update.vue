<template>
  <!-- Udate.vue -->
  <div class="update" :class="{ '--exceeded': newPlearnetCharacterCount > 25 }">
    <div class="letf__box">
      <form
        @submit.prevent="createNewPlearnet"
        name="formUpdate"
        class="formUpdate"
      >
        <!-- 輸入標題跟描述和上傳按鈕 -->
        <h1>上傳筆記</h1>

        <div class="new-plearnet__box">
          <!-- 輸入標題跟描述 -->
          <div class="input_box">
            <!-- 輸入標題 -->
            <div class="new-plearnet__title">
              <p>標題</p>
              <div class="title-select">
                <input
                  id="newPlearnetTitle"
                  v-model="state.newPlearnetTitle"
                  placeholder="輸入標題"
                  required
                />
                <!-- 選擇發布的分類 -->
                <div class="new-plearnet__select">
                  <select v-model="state.selected">
                    <option state.selected>academic</option>
                    <option>non-academic</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- 描述 -->
            <div class="new-plearnet__content">
              <p>內文</p>
              <!-- <label for="plearnetCharacterCount"
              >{{ newPlearnetCharacterCount }}/25</label
            > -->
              <textarea
                id="newPlearnetContent"
                rows="10"
                v-model="state.newPlearnetContent"
                placeholder="描述"
              ></textarea>
            </div>
          </div>
        </div>
        <!-- 四種功能 -->
        <p>選擇上傳方式</p>
        <div class="insert">
          <img v-bind:src="state.insert_video" alt="" />
          <img v-bind:src="state.insert_image" alt="" />
          <img v-bind:src="state.insert_file" alt="" />
          <img v-bind:src="state.insert_text" alt="" />
        </div>
        <!-- 上傳 -->
        <Button color="rgba(56,14,201,255)" text="上傳" />
      </form>
    </div>

    <div class="right__box">
      <!-- 預覽 -->
      <div class="upload">
        <button
          :style="{
            backgroundImage: 'url(' + state.preview + ')',
            backgroundSize: '300px 40px',
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

      <div class="preview__box">
        <textarea
          id="previewPlearnetContent"
          :value="state.newPlearnetContent"
          placeholder="筆記預覽"
          class="preview-plearnet__content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";

import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "Update",
  props: {},
  components: {
    Button,
  },
  setup() {
    const router = useRouter();

    const state = reactive({
      insert_image: require("../../static/img/insert_image.png"),
      insert_file: require("../../static/img/insert_file.png"),
      insert_text: require("../../static/img/insert_text.png"),
      insert_video: require("../../static/img/insert_video.png"),
      preview: require("../../static/img/uploadtitlepic.png"),
      image: null,

      newPlearnetTitle: "",
      newPlearnetContent: "",

      selected: "academic",
    });

    const newPlearnetCharacterCount = computed(
      () => state.newPlearnetContent.length
    );
    let usernameid = localStorage.getItem("token");

    const createNewPlearnet = async () => {
      await axios.post("plearnets", {
        title: state.newPlearnetTitle,
        username: usernameid,
        type: state.selected,
        forum: "test",
        content: state.newPlearnetContent,
        like: 0,
        watched: 0,
        favorite: 0,
      });
      alert("已發布文章");
      await router.push(`/${state.selected}/test`);
    };

    function previewImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.state.preview = e.target.result;
        };
        this.state.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    }

    return {
      state,
      newPlearnetCharacterCount,
      createNewPlearnet,
      previewImage,
    };
  },
};
</script>
<style scoped>
/* 新增的文章 */
.user-profile__plearnets-wrapper {
  color: black;
}
/* 整個畫面 */
.update {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  position: relative;
  z-index: 1;
}

.update.--exceeded {
  color: red;
}

.update.--exceeded .update_box .btn {
  background-color: red !important;
  color: white;
  pointer-events: none !important;
}
/* form */
.formUpdate {
  /* display: flex;
  justify-content: center; */
}
/* 左邊發文的地方 */
.letf__box {
  display: flex;
  flex-direction: column;
  width: 30%;
}
/* 放標題、內容、按鈕的div */
.new-plearnet__box {
  display: flex;
}

/* 新的文章的標題的整體 */

.new-plearnet__title > p {
  margin: 0;
  font-size: 2rem;
}

/* 新增文章的標題 */
#newPlearnetTitle {
  /* background-color: transparent; */
  border: none;
  border-color: white;
  border-bottom-style: solid;
  outline: none;
  color: #000000;
  height: 60px;
  width: 55%;
  font-size: 2.5em;
  border-radius: 15px;
  margin: 0 10px 0 0;
}
/* 標題輸入和選擇類別 */
.title-select {
  display: flex;
}
.new-plearnet__select > select {
  height: 100%;
  font-size: 18px;
  border-radius: 15px;
  background-color: #6e6e6e;
  color: #f6efba;
}
/* 新增文章的內容 */
.new-plearnet__content > p {
  margin: 0;
  font-size: 2rem;
}
.new-plearnet__content {
  display: flex;
  flex-direction: column;
}
#newPlearnetContent {
  /* background-color: transparent; */
  border: none;
  border-color: white;
  border-bottom-style: solid;
  outline: none;
  color: #000000;
  height: 300px;
  /* width: 500px; */
  width: 100%;
  font-size: 3em;
  border-radius: 15px;
}

::placeholder {
  /* color: #f8fc8e; */
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
  margin: 20px 0 0 0;
  /* top: 85px; */
  /* left: 90px; */
  text-align: center;
}

.insert > img {
  width: 15%;
  margin: 0 10px 0px 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px #e9f4ac solid;
  border-radius: 20px;
}
/* 右邊 */
.right__box {
  width: 50%;
  margin: 0 0 0 30px;
}
/* 放預覽的整體 */
.preview__box {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  /* width: 800px; */
  width: 70%;
  height: 500px;
  color: black;
  z-index: 0;
  top: 20%;
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
}

/* 上傳預覽圖片的按鈕 */
.upload {
  position: relative;
  top: 15%;
  margin: 10px;
}
.previe__button {
  height: 2.4rem;
  width: 18.6rem;
  margin: 0px 0px 0px 0px;
  position: relative;
  top: -1px;
  right: 7px;
  opacity: 0;
}
/* 預覽的圖片 */
.preview__img {
  width: 300px;
  height: 40px;
}

/* 預覽內容的地方 */
.preview-plearnet__content {
  /* width: 700px; */
  width: 80%;
  height: 350px;
  /* margin: 0px 0px 0px 10px; */
  padding: 5px;
  background: #b4b4c0;
  border: 1px solid #dbdada;
}
.preview-plearnet__content::placeholder {
  color: #00135e;
  font-size: 5em;
  font-weight: bold;
  text-align: center;
}
</style>