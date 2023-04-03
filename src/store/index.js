import { createStore } from "vuex";
import { operationsModule } from "./modules/operationsModule";
import { numbersModule } from "./modules/numbersModule";

export default createStore({
    modules: {
        operations: operationsModule,
        numbers: numbersModule,
    },
    state: {
        render: '',
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
            state.render = eval(state.render);
        },
        setDeleteNum(state) {
            if (state.render !== '') {
                state.render = state.render.toString().slice(0, -1)
            }
            state.render.length
        },
    }
})