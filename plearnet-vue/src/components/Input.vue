<template>
<div>
  <input
    :type="type"
    :placeholder="placeholder_text"
    :value="model_input"
    @input="$emit('update:model_input', $event.target.value)"
    :readonly = "readonly"
    required
  />
</div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type:String,
    model_input: String,
    placeholder_text:String,
    readonly:String,
  },
};
</script>
<style scoped>
input{
    margin:28px 0px 0px 0px;
}
</style>