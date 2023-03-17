<template>
  <div class="app">
    <div id="calculator" class="calculator">
      <div class="calculator__body">
        <div class="calculator__switch">

          <button @click="changeMode" type="button">
            <div v-if="nightActive">
              <ion-icon name="moon-outline"></ion-icon>
            </div>
            <div v-else>
              <ion-icon name="sunny-outline"></ion-icon>
            </div>
          </button>

        </div>

        <Calculator :class="{ active: nightActive }" />

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Calculator from './components/Calculator.vue';
const nightActive = ref(false)
const changeMode = () => {
    nightActive.value =! nightActive.value
}
</script>

<style lang="scss">
.app {
  width: 100%;
}
</style>