
<template>
  <PageHome id="a1"/>
  <PageAbout id="a2"/>
  <PageSubscription id="a3"/>
  <PageContact id="a4"/>
</template>

<script>
import PageHome from "../components/PageHome.vue";
import PageAbout from "../components/PageAbout.vue";
import PageSubscription from "../components/PageSubscription.vue";
import PageContact from "../components/PageContact.vue";

import axios from "axios";

export default {
  name: "PageIndex",
  components: {
    PageHome,
    PageAbout,
    PageSubscription,
    PageContact,

  },
  setup() {
    axios
        .get("topic/tagSearch?tag=1", {

        })
        .then(function (response) {
          console.log("123")
          console.log(response.data.data[0].title);
        })
        .catch(function (error){
          console.log(error);
        });

    return {

    };
  },
};
</script>

