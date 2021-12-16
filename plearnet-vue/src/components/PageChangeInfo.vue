<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0!">
      <div class="q-pa-xl bg-black relative-position">
        <div
          class="WAL__layout shadow-3"
          container
          style="min-height: 1000px; border: 1px solid; border-color: white"
        >
          <div class="q-pa-xl">
            <div class="q-gutter-md column items-center text-white">
              <q-item
                clickable
                v-ripple
                class="column justify-center items-center content-center"
                type="file"
                accept="image/*"
                @change="previewImage"
              >
                <q-item-section>
                  <q-avatar size="100px">
                    <img :src="avatar" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="text-caption">更換頭像</q-item-section>
                <input
                  class="changeImg"
                  type="file"
                  accept="image/*"
                  multiple
                  @change="previewImage"
                />
              </q-item>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">用戶名稱</div>
                <div class="col-9">
                  <q-input dark outlined v-model="state.userInfo.name" dense />
                </div>
              </div>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">性別</div>
                <div class="col-9">
                  <q-input dark outlined disable   v-model="state.userInfo.sex" dense />
                </div>
              </div>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">電子郵件</div>
                <div class="col-9">
                  <q-input dark outlined v-model="state.userInfo.email" dense />
                </div>
              </div>

              <!-- <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">手機號碼</div>
                <div class="col-9">
                  <q-input dark outlined v-model="state.phone" dense />
                </div>
              </div> -->

              <!-- <div class="full-width row items-center ">
                <div class="col-2 text-left q-pr-lg">個性簽名</div>
                <div class="col-9 ">
                  <q-input dark outlined v-model="state.text" dense />
                </div>
              </div> -->
              <div class="fit row">
                <q-space />
                <q-btn
                  rounded
                  color="grey-14"
                  label="確定修改"        
                  @click.prevent="change"                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { reactive, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "WhatsappLayout",
  components: {
    // PageInfo
  },
  data() {
    return {
      avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
    };
  },
  methods: {
    avatarImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.avatar = e.target.result;
          console.log(this.avatar);
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },
  setup() {
    const $q = useQuasar();

    const state = reactive({
      userInfo: [],
      userId:null,
      // username:"",
      // gender:"",
      // email:"",
      // phone:"",
      // text:"",
    });
    axios.defaults.headers.common["token"] = localStorage.getItem("token");

    const router = useRouter();

    axios
      .get("http://localhost:8080/userAccount/userSearch", {})
      .then(function (response) {
        state.userInfo = response.data.data;

        console.log(state.userInfo.name);
      })
      .catch(function (error) {
        console.log(error);
      });

     axios
      .get("http://localhost:8080/userAccount/getUserId", {})
      .then(function (response) {
        state.userId = response.data.data.user_id;
      })
      .catch(function (error) {
        console.log(error);
      });
    
    
    function change(){
      // console.log(state.userId)
      // console.log(state.userInfo.name)
      // console.log(state.userInfo.email)

      axios.patch("http://localhost:8080/userAccount/editUser", {
        id: state.userId,
        name: state.userInfo.name,
        email: state.userInfo.email,
      })
      router.push("/main/info")
      
    }
    

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    return {
      style,
      state,
      change
    };
  },
};
</script>

<style lang="sass" scoped>
.WAL
  width: 100%
  height: 100%
  padding-top: 20px
  padding-bottom: 20px

  &__layout
    margin: 0 auto
    // z-index: 4000
    height: 100%
    width: 90%
    max-width: 950px
    border-radius: 5px

.changeImg
  width: 132px
  height: 136px
  position: absolute
  opacity: 0
</style>