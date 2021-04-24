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
        <Button />
        
    </header>
</template>

<script>
import Button from './Button'

export default {
    name:'Header',
    props: {
        title:String,
    },
    components: {
        Button
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