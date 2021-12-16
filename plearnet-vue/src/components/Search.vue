<template>
<!-- Search.vue -->
<!-- 放搜尋的地方 -->
  <div class="search__box">
    <!-- 搜尋框的背景 -->
    <div class="search__control" :style="{ display: text }">
      <!-- 搜尋 -->
      <input class="search" :placeholder="prompt + selected" />
      <!-- 搜尋的種類選擇 -->
      <div class="search__select">
        <button @click="show = !show" class="search__select">▼</button>
        <transition
          @enter="enter"
          @leave="leave"
          @after-enter="afterEnter"
          @after-leave="afterLeave"
        >
          <div v-if="show">
            <div class="block" id="v-model-radiobutton">
              <div>
                <input
                  type="radio"
                  value="標題"
                  v-model="selected"
                  id="title"
                  name="selected"
                />
                <label for="title">標題</label>
              </div>

              <div>
                <input
                  type="radio"
                  value="作者"
                  id="user"
                  v-model="selected"
                  name="selected"
                />
                <label for="user">作者</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="日期"
                  id="date"
                  v-model="selected"
                  name="selected"
                />
                <label for="date">日期</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="分類"
                  id="class"
                  v-model="selected"
                  name="selected"
                />
                <label for="class">分類</label>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      prompt: "請輸入",
      selected: "標題",
      show: false,
    };
  },
  props: {
    text: String,
  },
};
</script>

<style scoped>
/* 放搜尋的地方 */
.search__box {
  display: flex;
  align-items: center;
}
/* 搜尋框的背景 */
.search__box > .search__control {
  display: flex;
  width: 200px;
  height: 25px;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: white;
}
/* 搜尋 */
.search__control > .search {
  border: none;
  outline: none;
}

/* 搜尋的種類選擇 */
.search__control > .search__select {
  border-radius: 50%;
}
/* 種類選擇的動畫 */
.v-leave {
  opacity: 1;
}

.v-leave-active {
  transition: opacity 0.5s;
}

.v-leave-to {
  opacity: 0;
}

.v-enter {
  opacity: 0;
}

.v-enter-active {
  transition: opacity 0.5s;
}

.v-enter-to {
  opacity: 1;
}

button {
  margin-bottom: 10px;
}
.block {
  display: flex;
  background: rgb(255, 255, 255);
  width: 230px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  position: absolute;
  right: 275px;
}
.search__select {
  border-radius: 100px;
}
</style>