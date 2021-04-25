<template>
    <header>
        <div>
            <a href="#" class="brand"></a>
            <input class="search">
            <select>
                <option>標題</option>
                <option>作者</option>
                <option>日期</option>
            </select>
        </div>
        <Login />
        
    </header>
</template>

<script>
import Login from './Login'

export default {
    name:'Header',
    props: {
        title:String,
    },
    components: {
        Login
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:3px 250px 3px;
    }
</style>