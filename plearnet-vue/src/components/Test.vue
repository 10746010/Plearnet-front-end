<template>
  <div>
    <button :style="{ background: color }" class="btn">{{ text }}</button>
        <form @submit.prevent="test">
      <input />
      <div>
        <button>test</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Test",
  props: {
    text: String,
    color: String,
  },
  setup() {
    const axios = require("axios");
    axios
      .get("http://localhost:3000/users")
      .then(function (response) {
        const test_value = response.data[0];
        console.log(test_value)
        // console.log(test_value[0])

        // console.log(test_value.filter(user => user.email))
      })
      .catch(function (error) {
        console.log(error);
      });

    // axios.post('http://localhost:3000/users',{
    //   email:'test2@gmai.com',
    //   password:"1234"
    // })
    // .then(function (response){
    //   console.log(response);
    // })
    // .catch(function(error){
    //   console.log(error);
    // })

    const state = reactive({});

    function test() {
      window.alert("hi");
    }
    return {
      state,
      test,
    };
  },
};
</script>
<style scoped>
</style>