<template>
  <div class="plearnet-item">
      <div class="user-profile__plearnet">
          <div class="plearnet-item__user">
            {{username}}
          </div>
          <div class="plearnet-item__title">
              {{plearnet.title}}
          </div>
          <div class="plearnet-item__content">
              {{plearnet.content}}
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "PlearnetItem",
  props: {
      username:{
          type:String,
          require:true
      },
      plearnet:{
          type:Object,
          require:true
      }
  }
};
</script>
<style scoped>
.plearnet-item{
    padding:20px;
    background-color: white;
    border-radius: 5px;
    border:1px solid #DFE3E8;
    box-sizing:border-box;
    cursor:pointer;
    transition: all 0.25s ease;
}

.plearnet-item:hover{
    transform: scale(1.1, 1.1);
}

.plearnet-item__user{
    font-weight: bold;
    color:blue
}

.plearnet-item__title{
    font-weight: bold;

}
</style>