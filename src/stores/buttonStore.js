import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useButtonStore = defineStore('buttonStore', () => {
  const isActiveButtonBlue = ref(true);
  const isActiveButtonBlack = ref(true);
  const isActiveButtonRed = ref(true);

  const toggleButtonState = (buttonType) => {
    if (buttonType === 'blue') {
      isActiveButtonBlue.value = !isActiveButtonBlue.value;
    } else if (buttonType === 'black') {
      isActiveButtonBlack.value = !isActiveButtonBlack.value;
    } else if (buttonType === 'red') {
      isActiveButtonRed.value = !isActiveButtonRed.value;
    }
  };

  return {
    isActiveButtonBlue,
    isActiveButtonBlack,
    isActiveButtonRed,
    toggleButtonState
  };
});
