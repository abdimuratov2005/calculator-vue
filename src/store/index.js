import { createStore } from "vuex";
export default createStore({
    state: {
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
    },
    mutations: {
        setInput(state, char) {
            if (state.render == Number) {
                state.render = '0'
                state.render = state.render.toString()
                
            }   
            state.render += char
            state.render.length || state.render.includes('+') == -1;

        },
        setReset(state) {
            state.render = ''
        },
        setCalculator(state) {
            state.render = '= ' + eval(state.render);
        },
        setDeleteNum(state) {
            if (state.render !== '') {
                state.render = state.render.toString().slice(0, -1)
            }
            state.render.length
        },
    }
})