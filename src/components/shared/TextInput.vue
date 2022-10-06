<template>
  <input 
    type="text" 
    :value="modelValue"
    :placeholder="placeholder" 
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
    >
</template>

<script>
  export default {
    name: "TextInput",
    props: {
      placeholder: {
        type: String,
        required:false,
        default: '',
      },
      modelValue: {
        type: String,
        required: true,
      }
    },
    emits: ["update:modelValue"],
    // data() {
    //   return {
    //     value: '',
    //   }
    // },
    methods: {
      handleInput($event) {
        // this.value = $event.target.value;
        this.$emit('update:modelValue', $event.target.value);
      },
    },
  }
</script>