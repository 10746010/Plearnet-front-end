<template>
    <router-link to="/user"><button class="btn">登入</button></router-link>
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