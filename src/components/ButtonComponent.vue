<script setup>
import { computed } from "vue";

const props = defineProps({
  buttonLabel: String,
  isActive: Boolean,
  buttonType: String,
  clickHandler: Function,
});

const shouldShowButton = computed(() => {
  return props.isActive !== undefined;
});

const buttonClass = computed(() => {
  if (props.isActive) {
    return props.buttonType === "blue"
      ? "bg-[#009fc2] text-white border-none"
      : props.buttonType === "black"
        ? "bg-black text-white border-none"
        : props.buttonType === "red"
          ? "bg-red-500 text-white border-none"
          : "";
  } else {
    return props.buttonType === "blue"
      ? "bg-white text-[#009fc2] border-2 border-[#009fc2]"
      : props.buttonType === "black"
        ? "bg-white text-black border-2 border-black"
        : props.buttonType === "red"
          ? "bg-white text-red-500 border-2 border-red"
          : "";
  }
});

const handleClick = () => {
  if (!props.isActive) {
    if (props.clickHandler) props.clickHandler();
  }
};
</script>

<template>
  <button v-if="shouldShowButton" @click="handleClick" :class="buttonClass" type="button">
    <span>{{ buttonLabel }}</span>
  </button>

  <span>{{ isActive ? "Active" : "Inactive" }}</span>
</template>

<style>
button {
  height: 48px;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
  white-space: nowrap;
}

button:hover {
  opacity: 0.9;
}
</style>
