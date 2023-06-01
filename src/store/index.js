import { defineStore } from 'pinia';

export const useCalculatorStore = defineStore('calculator', {
    state: () => ({
        numbers: [
            { id: 1, value: '7', style: 'color: #109DFF' },
            { id: 2, value: '8', style: 'color: #109DFF' },
            { id: 3, value: '9', style: 'color: #109DFF' },
            { id: 4, value: '4', style: 'color: #109DFF' },
            { id: 5, value: '5', style: 'color: #109DFF' },
            { id: 6, value: '6', style: 'color: #109DFF' },
            { id: 7, value: '1', style: 'color: #109DFF' },
            { id: 8, value: '2', style: 'color: #109DFF' },
            { id: 9, value: '3', style: 'color: #109DFF' },
            { id: 10, value: '0', style: 'color: #109DFF' },
            { id: 11, value: '.', style: 'color: #109DFF' },
        ],
        render: '',
        operations1: [
            { id: 1, value: 'Ac', style: 'color: #858585' },
        ],
        operations3: [
            { id: 1, value: '=' },
        ],
        operations4: [
            { id: 2, value: '', icon: './img/delete.svg' },
        ],
        operations2: [
            { id: 1, value: '*', style: 'background: #ADE2FF; border-radius: 12px; color: #109DFF' },
            { id: 2, value: '-', style: 'background: #ADE2FF; border-radius: 12px; color: #109DFF' },
            { id: 3, value: '+', style: 'background: #ADE2FF; border-radius: 12px; color: #109DFF' },
            { id: 4, value: '/', style: 'background: #ADE2FF; border-radius: 12px; color: #109DFF' },
        ],
    }),
    actions: {
        setInput(char) {
            if (this.render == Number) {
                this.render = '0'
                this.render = this.render.toString()
            }
            this.render += char
        },
        setReset() {
            this.render = ''
        },
        setCalculator() {
            this.render = eval(this.render);
        },
        setDeleteNum() {
            if (this.render !== '') {
                this.render = this.render.toString().slice(0, -1)
            }
            this.render.length
        },
    }
});