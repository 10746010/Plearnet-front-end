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
          <q-img class="img" src="../../static/img/p3_1.jpg">
          <div
            class="img-content absolute-full flex flex-center text-info"
          >
            多元內容
          </div>
          </q-img>
        </div>
        <div class="box">
          <q-img class="img" src="../../static/img/p3_2.jpg" >
          <div
            class="img-content absolute-full flex flex-center text-info"
          >
            精選筆記
          </div>
          </q-img>
        </div>
        <div class="box">
          <q-img class="img" src="../../static/img/p3_3.jpg" >
          <div
            class="img-content absolute-full flex flex-center text-info"
          >
            募集筆記
          </div>
          </q-img>
        </div>
        <div class="box">
          <q-img class="img" src="../../static/img/p3_4.jpg" >
          <div
            class="img-content absolute-full flex flex-center text-info"
          >
            延伸閱讀
          </div>
          </q-img>
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
<style lang="sass" scoped>
.container 
	display: flex
	width: 100%
	padding: 4% 2%
	box-sizing: border-box
	height: 100vh

.box 
	flex: 1
	overflow: hidden
	transition: 0.5s
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1)
	line-height: 0
	& > .img 
		width: 100%
		height: calc(100%)
		object-fit: cover
		transition: 0.5s
	&:hover 
		flex: 1 1 50%
		& > img 
			width: 100%
			height: 100%

.img-content 
	font-weight: bold
	font-size: 3rem
	opacity: 0
	&:hover 
		transition: 1s
		opacity: 1
	@media (max-width:599px)
	font-size: 2rem
    
    
  


</style>