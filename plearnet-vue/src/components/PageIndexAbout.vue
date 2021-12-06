<template>
  <div class="bg-blue-grey-8 q-pa-md">
    <div class="row full-width">
      <!-- <div class="col-5 row justify-center items-center content-center"> -->
      <!-- <img style="width:450px" src="../../static/img/p3_1.jpg"> -->
      <!-- <div class="absolute-full text-subtitle2 flex flex-center text-indigo-10"  style="background: rgba(0, 0, 0, 0);font-weight:bold;font-size:3rem"> -->
      <!-- 多元內容 -->
      <!-- </div> -->
      <!-- </q-img> -->
      <!-- </div> -->

      <!-- <div class="col-5 row justify-center items-center content-center"> -->
      <!-- <img style="width:450px"  src="../../static/img/p3_2.jpg"> -->
      <!-- <div class="absolute-full text-subtitle2 flex flex-center text-indigo-10"  style="background: rgba(0, 0, 0, 0);font-weight:bold;font-size:3rem"> -->
      <!-- 精選筆記 -->
      <!-- </div> -->
      <!-- </q-img> -->
      <!-- </div> -->

      <!-- <div class="col-5 row justify-center items-center content-center"> -->
      <!-- <img style="width:450px" src="../../static/img/p3_3.jpg"> -->
      <!-- <div class="absolute-full text-subtitle2 flex flex-center text-indigo-10"  style="background: rgba(0, 0, 0, 0);font-weight:bold;font-size:3rem"> -->
      <!-- 募集筆記 -->
      <!-- </div> -->
      <!-- </q-img> -->
      <!-- </div> -->

      <!-- <div class="col-5 row justify-center items-center content-center"> -->
      <!-- <img class="test" src="../../static/img/p3_4.jpg"> -->
      <!-- <div class="absolute-full text-subtitle2 flex flex-center text-indigo-10"  style="background: rgba(0, 0, 0, 0);font-weight:bold;font-size:3rem"> -->
      <!-- 延伸閱讀 -->
      <!-- </div> -->
      <!-- </q-img> -->
      <!-- </div> -->
      <div class="container">
        <div class="box">
          <img  src="../../static/img/p3_1.jpg" />
        </div>
        <div class="box">
          <img  src="../../static/img/p3_2.jpg" />
        </div>
        <div class="box">
          <img src="../../static/img/p3_3.jpg" />
        </div>
        <div class="box">
          <img src="../../static/img/p3_4.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageIndexAbout",
};
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
  padding: 4% 2%;
  box-sizing: border-box;
  height: 100vh;
}

.box {
  flex: 1;
  overflow: hidden;
  transition: 0.5s;
  /* margin: 0 2%; */
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;
}

.box > img {
  width: 200%;
  height: calc(100% );
  object-fit: cover;
  transition: 0.5s;
}

.box > span {
  font-size: 3.8vh;
  display: block;
  text-align: center;
  height: 10vh;
  line-height: 2.6;
}

.box:hover {
  flex: 1 1 50%;
}
.box:hover > img {
  width: 100%;
  height: 100%;
}
</style>