<template>
  <div class="container">
    <input type="text" data-test="search-input" :value="modelValue" 
       @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
  </div>
</template>

<script setup lang='ts'>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<style scoped lang="scss">
input {
  padding: 20px;
  min-width: 600px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 14px;
  outline: 0;
  border: 0;
  border-radius: 5px;
  box-shadow: inset 0px 0px 2px 1px;
}
</style>
