<template>
    <router-link to="/user/self"><button class="btn">登入</button></router-link>
</template>

<script>
export default {
    name: 'Login',
    porops: {
        text: String,
        color: String,
    },
}
</script>