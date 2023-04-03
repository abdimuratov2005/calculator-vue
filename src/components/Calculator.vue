<template>
    <div id="rendered" class="rendered">
        <div class="rendered__container">
            <div class="rendered__body" @keyup="setCalculator()">
                <input
                    type="text"
                    placeholder="0" 
                    v-model="render"
                    class="rendered__render"
                >
                <div class="rendered__opertions1">
                    <button
                        type="button"
                        class="primary-styles"
                        :style="operation.style"
                        @click="setReset()"
                        :key="operation.id"
                        v-for="operation in operations1"
                    >
                        {{ operation.value }}
                    </button>
                    <button
                        type="button"
                        class="primary-styles"
                        :style="operation.style"
                        @click="setDeleteNum(numbers.value)"
                        :key="operation.id"
                        v-for="operation in operations4"
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
                            @click="setInput(operation.value)"
                            :style="operation.style"
                            :key="operation.id"
                            v-for="operation in operations2"
                        >
                            {{ operation.value }}
                            
                            <img :src="operation.icon" alt="">
                        </button>
                    </div>
                    <div class="rendered__numbers">
                        <button 
                            type="button"
                            @click="setInput(number.value)"
                            class="primary-styles"
                            :style="number.style"
                            :key="number.id"
                            v-for="number in numbers"
                        >
                            {{ number.value }}
                        </button>
                        <button
                            type="button"
                            @click="setCalculator()"
                            class="primary-styles result"
                            :style="operations3s.style"
                            v-for="operations3s in operations3"
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

<script>
import { mapMutations, mapState } from 'vuex'


export default {
    name: 'rendered',
    computed: {
        ...mapState({
            render: state => state.render,
            operations1: state => state.operations.operations1,
            operations2: state => state.operations.operations2,
            operations3: state => state.operations.operations3,
            operations4: state => state.operations.operations4,
            numbers: state => state.numbers.numbers,
        })
    },
    methods:{
        ...mapMutations({
            setInput: 'setInput',
            setReset: 'setReset',
            setCalculator: 'setCalculator',
            setDeleteNum: 'setDeleteNum'
        })
    }
}
</script>

<style></style>