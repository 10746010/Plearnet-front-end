<template>
    <router-link to="/user/self"><button class="btn">登入</button></router-link>
    <!-- <Test text="Add Task" color="red" /> -->
</template>

<script>
// import Test from './Test'

export default {
    name: 'Login',
    porops: {
        text: String,
        color: String,
    },
    components:{
        // Test,
    }
}
</script>