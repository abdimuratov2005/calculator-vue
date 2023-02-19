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
            
            <rendered
                :operations2="operations2"
                :numbers="numbers"
                :class="{active : nightActive}"
            />

        </div>
    </div>
</template>

<script>
export default {  
    name: 'calculator',
    data() {
        return {
            nightActive: false,
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
                { id: 10, value: '0', style: 'color: #109DFF'},
                { id: 11, value: '.', style: 'color: #109DFF' },
            ],
        }
    },
}
</script>

<style></style>