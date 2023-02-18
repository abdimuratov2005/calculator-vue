<template>
    <div id="day" class="day">
        <div class="day__container">
            <div class="day__body">
                <div class="day__render">
                    <div>
                        {{ render }}
                    </div>
                </div>
                <div class="day__buttons">
                    <div class="column-btns">
                        <div  class="column-one">
                            <div
                                class="day__column column1" 
                                v-for="column1s in column1" 
                                :style="column1s.style"
                                :key="column1s.id"
                                >
                                {{ column1s.value }}
                                
                                <img :src="column1s.icon">
                            </div>
                        </div>
                        <div class="column-two">
                            <div 
                                class="day__column column2" 
                                v-for="column2s in column2"
                                :style="column2s.style"
                                @click="render = column2s.value"
                                :key="column2s.id">
                                {{ column2s.value }}
                            </div>
                        </div>
                        <div 
                            class="column-three">
                            <div 
                                class="day__column column3" 
                                v-for="column3s in column3" 
                                :style="column3s.style"
                                :key="column3s.id">
                                {{ column3s.value }}
                            </div>
                        </div>
                        <div class="column-four">
                            <div 
                                class="day__column column4" 
                                v-for="column4s in column4" 
                                :style="column4s.style"
                                :key="column4s.id">
                                {{ column4s.value }}
                            </div>
                        </div>
                        <div class="column-five">
                            <div 
                                class="day__column column5" 
                                v-for="column5s in column5" 
                                :style="column5s.style"
                                :key="column5s.id">
                                {{ column5s.value }}
                            </div>
                        </div>
                    </div>
                    <div class="column-symbols">
                        <div class="column-six">
                            <div
                                class="day__column column6" 
                                v-for="column6s in column6" 
                                :style="column6s.style"
                                :key="column6s.id">
                                {{ column6s.value }}
                                <img :src="column6s.icon">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        column1: {
            type: Array,
            required: true
        },
        column2: {
            type: Array,
            required: true
        },
        column3: {
            type: Array,
            required: true
        },
        column4: {
            type: Array,
            required: true
        },
        column5: {
            type: Array,
            required: true
        },
        column6: {
            type: Array,
            required: true
        },
        render: {
            type: String,
            required: true
        }
    },
}
</script>

<style></style>