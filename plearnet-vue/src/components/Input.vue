<template>
<div style="display:flex">
  <input
    type="text"
    :value="model_input"
    @input="$emit('update:model_input', $event.target.value)"
    :readonly = "readonly"
    required
  />

  {{model_input}}

</div>
</template>

<script>
export default {
  name: "Input",
  props: {
    model_input: String,
    readonly:String,
  },
};
</script>
<style scoped>
input{
    margin:28px 0px 0px 28px;
}
</style>