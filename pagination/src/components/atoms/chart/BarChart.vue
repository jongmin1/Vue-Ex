<template>
    <div class="bar-chart">
        <div class="bar-chart__container">
            <span class="bar-chart__container__value">{{ data }}%</span>
            <div class="bar-chart__container__base">
                <div v-if="data >= 80" class="gauge" :style="{ width: data + '%' }"></div>
                <div v-else class="gauge" :style="{ width: data + '%', backgroundColor: '#D92D20' }"></div>
            </div>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

interface Props {
    data: number
}
const props = defineProps<Props>()
const {data} =toRefs(props)
</script>

<style lang="scss">
.bar-chart {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70%;

    &__container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 100%;

        gap: 4px;

        &__value {
            font-size: 16px;
        }
        &__base {
            position: relative;
            
            width: 100%;
            height: 12px;

            background-color: rgba($color-white-200, 0.3);
            border-radius: 10px;

            .gauge {
                position: absolute;

                // width: 70%;
                height: 12px;

                background-color: $color-green-000;
                border-radius: 10px;
            }
        }

    }
}
</style>