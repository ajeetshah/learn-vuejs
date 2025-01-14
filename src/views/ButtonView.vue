<script setup>
import Button from "../components/ButtonComponent.vue";
import { useButtonStore } from "../stores/buttonStore";
const buttonStore = useButtonStore();

const onButtonClick = (buttonType) => {
  buttonStore.toggleButtonState(buttonType);
};
</script>

<template>
  <div class="button-container">
    <div class="bg-blue-500 text-white p-4">
      Hello, Tailwind CSS!
    </div>
    <Button :buttonLabel="'Active blue'" :isActive="buttonStore.isActiveButtonBlue" :buttonType="'blue'"
      :clickHandler="() => onButtonClick('blue')" />
    <Button :buttonLabel="'Inactive blue'" :isActive="!buttonStore.isActiveButtonBlue" :buttonType="'blue'"
      :clickHandler="() => onButtonClick('blue')" />
    <Button :buttonLabel="'Active black'" :isActive="buttonStore.isActiveButtonBlack" :buttonType="'black'"
      :clickHandler="() => onButtonClick('black')" />
    <Button :buttonLabel="'Inactive black'" :isActive="!buttonStore.isActiveButtonBlack" :buttonType="'black'"
      :clickHandler="() => onButtonClick('black')" />
  </div>
</template>

<style>
.button-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}
</style>
