<template>
    <div id="rendered" class="rendered">
        <div class="rendered__container">
            <div class="rendered__body" @keyup="store.setCalculator()">
                <input
                    type="text"
                    placeholder="0" 
                    v-model="store.render"
                    class="rendered__render"
                >
                <div class="rendered__opertions1">
                    <button
                        type="button"
                        class="primary-styles"
                        :style="operation.style"
                        @click="store.setReset()"
                        :key="operation.id"
                        v-for="operation in store.operations1"
                    >
                        {{ operation.value }}
                    </button>
                    <button
                        type="button"
                        class="primary-styles"
                        :style="operation.style"
                        @click="store.setDeleteNum()"
                        :key="operation.id"
                        v-for="operation in store.operations4"
                    >
                        {{ operation.operation }}
                        <img :src="operation.icon" alt="">
                    </button>
                </div>
                <div class="rendered__buttons">
                    <div class="rendered__opertions">
                        <button 
                            type="button"
                            class="primary-styles"
                            @click="store.setInput(operation.value)"
                            :style="operation.style"
                            :key="operation.id"
                            v-for="operation in store.operations2"
                        >
                            {{ operation.value }}
                            
                            <img :src="operation.icon" alt="">
                        </button>
                    </div>
                    <div class="rendered__numbers">
                        <button 
                            type="button"
                            @click="store.setInput(number.value)"
                            class="primary-styles"
                            :style="number.style"
                            :key="number.id"
                            v-for="number in store.numbers"
                        >
                            {{ number.value }}
                        </button>
                        <button
                            type="button"
                            @click="store.setCalculator()"
                            class="primary-styles result"
                            :style="operations3s.style"
                            v-for="operations3s in store.operations3"
                            :key="operations3s.id"

                        >
                            {{operations3s.value}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { useCalculatorStore } from '../store/index.js'
const store = useCalculatorStore();

// watcher does not work correctly
watch(store.render, (newValue) => {
    const regax = /^[0-9][+\-*/][0-9]/;
    if (!regax.test(newValue)){
        console.log('WTF!');
    } else {
        console.log('HAHAHAHHAHAHA');
    }
})
</script>

<style></style>