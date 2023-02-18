<template>
    <div id="calculator" class="calculator">
        <div class="calculator__body">
            <div class="calculator__switch">
                
                <button @click="nightActive =! nightActive" type="button">
                    <div v-if="nightActive">
                        <ion-icon name="moon-outline"></ion-icon>
                    </div>
                    <div v-else>
                        <ion-icon name="sunny-outline"></ion-icon>
                    </div>
                </button>
            </div>
            <router-view 
                :column1="column1"
                :column2="column2"
                :column3="column3"
                :column4="column4"
                :column5="column5"
                :column6="column6"
                :class="{active : nightActive}"
                :render="render"
            />
        </div>
    </div>
</template>

<script>
export default {  
    name: 'calculator',
    data() {
        return {
            render: null,
            nightActive: false,
            column1: [
                { id: 1, value: 'Ac', style: 'color: #858585'},
                { id: 2, icon: './img/delete.svg'},
                { id: 3, value: '/', style: 'background: #ADE2FF; border-radius: 12px; color: #109DFF' },
            ],
            column2: [
                { id: 1, value: '7', style: 'color: #109DFF' },
                { id: 2, value: '8', style: 'color: #109DFF' },
                { id: 3, value: '9', style: 'color: #109DFF' },
            ],
            column3: [
                { id: 1, value: '4', style: 'color: #109DFF' },
                { id: 2, value: '5', style: 'color: #109DFF' },
                { id: 3, value: '6', style: 'color: #109DFF' },
            ],
            column4: [
                { id: 1, value: '1', style: 'color: #109DFF' },
                { id: 2, value: '2', style: 'color: #109DFF' },
                { id: 3, value: '3', style: 'color: #109DFF' },
            ],
            column5: [
                { id: 1, value: '0', style: 'color: #109DFF; width: 144px' },
                { id: 2, value: '.', style: 'color: #109DFF' },
            ],
            column6: [
                { id: 1, value: '*', style: 'background: #ADE2FF; border-radius: 12px; color: #109DFF' },
                { id: 2, value: '-', style: 'background: #ADE2FF; border-radius: 12px; color: #109DFF' },
                { id: 3, value: '+', style: 'background: #ADE2FF; border-radius: 12px; color: #109DFF; height: 96px' },
                { id: 4, value: '=', style: 'background: #19ACFF; border-radius: 12px; color: #B2DAFF; height: 96px; box-shadow: -9px 13px 23px rgba(0, 163, 255, 0.65), inset -3px 4px 11px #B0DFFF' },
            ],
        }
    },
    watch: {
        render(value){
            console.log("reder", value);
        }
    }
}
</script>

<style></style>