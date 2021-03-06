<template>
  <div class="atricle">
    <div class="sortButton">
      <button @click.prevent="change('id')">最新</button>
      <button @click.prevent="change('like')">最多讚</button>
      <button @click.prevent="change('watched')">最多點閱</button>
    </div>

    <div class="box">
      <span class="left_right_rotating"></span>
      <span class="left_right_rotating"></span>
      <span class="top_bottom_rotating"></span>
      <span class="top_bottom_rotating"></span>
      <div class="content">
        <AtricleItem
          v-for="atricle in state.data"
          :key="atricle.id"
          :text="atricle.title"
          :like="atricle.like"
          :watched="atricle.watched"
          :favorite="atricle.favorite"
          @click.prevent="
            watch(
              atricle.id,
              atricle.watched,
              atricle.title,
              atricle.type,
              atricle.forum
            )
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
import AtricleItem from "./AtricleItem.vue";
import { reactive, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

import axios from "axios";

export default {
  name: "AtricleBox",
  props: {},
  components: {
    AtricleItem,
  },
  setup() {
    const state = reactive({
      data: [],
      page: 0,
      choose: "id",
    });

    const router = useRouter();
    const route = useRoute();
    // 檢查滾動
    function scrollHandle() {
      const scrollHeight = document.body.scrollHeight;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const clientHeight = document.body.clientHeight;
      const distance = scrollHeight - scrollTop - clientHeight;
      if (distance <= 200) {
        load();
      }
    }
    onMounted(() => {
      window.addEventListener("scroll", scrollHandle, false);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollHandle, false);
    });

    // 按鈕按下去後切換選擇的排序方法
    const change = async (now) => {
      state.choose = now;
      await router.push(`test?choose=${state.choose}`);
      await router.go(0);
    };
    let nowForum = route.params.forum;
    let nowType = route.params.type;
    let readyLoad = true;
    function load() {
      // 排序方法
      if (Object.keys(route.query).length) {
        state.choose = route.query.choose;
      }

      if (readyLoad) {
        readyLoad = false;
        axios
          .get("plearnets", {
            params: {
              type: nowType,
              forum: nowForum,
              _sort: state.choose,
              _order: "desc",
              // _order: "asc",
            },
          })
          .then(function (response) {
            if (response.data.slice(state.page).length) {
              state.data = state.data.concat(
                response.data.splice(state.page, 8)
              );
              state.page += 8;
              readyLoad = true;
            } else {
              state.page -= 8;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
    load();

    // 點擊文章
    const watch = async (id, watch, title, type, forum) => {
      axios
        .get("watched", {
          params: {
            atricle: id,
          },
        })
        .then((res) => {
          console.log(res.data.length);
          if (res.data.length == 0) {
            add();
          }
        });
      //新增閱讀歷史紀錄
      let usernameid = localStorage.getItem("token");

      function add() {
        axios.post("watched", {
          username: usernameid,
          title: title,
          type: type,
          forum: forum,
          atricle: id,
        });
      }

      axios.patch(`plearnets/${id}`, {
        watched: (watch += 1),
      });
      await router.push(`/${nowType}/${nowForum}/${id}`);
    };
    return {
      state,
      change,
      watch,
    };
  },
};
</script>
<style scoped>
.box {
  position: relative;
  width: 60%;
  height: 100%;
  background: #073335ed;
  box-shadow: 0 20px 50px rgb(23 86 90);
  border: 2px solid #2aad86;
  color: white;
  padding: 20px;
  box-sizing: border-box;
}
.box .content {
  border: 1px solid #f0a591;
  padding: 20px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5);
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}

/* 上下左右的光條 */
.box .left_right_rotating,
.top_bottom_rotating {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}
/* 上下會左右移動的光條 */
.box .left_right_rotating::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #ffffff;
  animation: animate-left-right 4s linear infinite;
}

.box .left_right_rotating:nth-child(1) {
  transform: rotate(0deg);
}
.box .left_right_rotating:nth-child(2) {
  transform: rotate(180deg);
}
@keyframes animate-left-right {
  0% {
    transform: scaleX(0);
    transform-origin: left;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }
  50.1% {
    transform: scaleX(1);
    transform-origin: right;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
}
/* 左右會上下移動的光條 */
.box .top_bottom_rotating::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 100%;
  background: #ffffff;
  animation: animate-top-bottom 10s linear infinite;
}

.box .top_bottom_rotating:nth-child(3) {
  transform: rotate(0deg);
}

.box .top_bottom_rotating:nth-child(4) {
  transform: rotate(180deg);
}

@keyframes animate-top-bottom {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  50% {
    transform: scaleY(1);
    transform-origin: top;
  }
  50.1% {
    transform: scaleY(1);
    transform-origin: bottom;
  }
  100% {
    transform: scaleY(0);
    transform-origin: bottom;
  }
}

.atricle {
  position: relative;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sortButton {
  display: flex;
}
</style>