<template>
    <div id="rendered" class="rendered">
        <div class="rendered__container">
            <div class="rendered__body" @keyup="calculator()">
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
                        @click="reset()"
                        :key="operation.id"
                        v-for="operation in operations1"
                    >
                        {{ operation.value }}
                    </button>
                    <button
                        type="button"
                        class="primary-styles"
                        :style="operation.style"
                        @click="deleteNum(numbers.value)"
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
                            @click="input(operation.value)"
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
                            @click="input(number.value)"
                            class="primary-styles"
                            :style="number.style"
                            :key="number.id"
                            v-for="number in numbers"
                        >
                            {{ number.value }}
                        </button>
                        <button
                            type="button"
                            @click="calculator()"
                            class="primary-styles result"
                            :style="operations3s.style"
                            v-for="operations3s in operations3"
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

export default {
    name: 'rendered',
    data(){
        return{
            render: '',
            operations1: [
                { id: 1, value: 'Ac', style: 'color: #858585'},
            ],
            operations3: [
                { id: 1, value: '=' },
            ],
            operations4: [
                { id: 2, value: '', icon: './img/delete.svg'},
            ],
        }
    },
    props: {
        operations2: {
            type: Array,
            required: true
        },
        numbers: {
            type: Array,
            required: true
        },
    },
    methods:{
        input(char){
            if (this.render === Number){
                this.render = '0'
                this.render = this.render.toString()
            }
            this.render += char
        },
        reset(){
            this.render = ''
        },
        calculator(){
            this.render = '= ' + eval(this.render);
        },
        deleteNum(){
            if (this.render !== '') {
                this.render = this.render.toString().slice(0, -1)
            }
            
        },
    }
}
</script>

<style></style>