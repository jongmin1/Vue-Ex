<template>
    <div class="bar-chart">
        <div class="bar-chart__container">
            <span class="bar-chart__container__value">89%</span>
            <div class="bar-chart__container__base">
                <div class="gauge"></div>
            </div>
        </div>        
    </div>
</template>

<script setup lang="ts"></script>

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

                width: 70%;
                height: 12px;

                background-color: $color-green-000;
                border-radius: 1-px;
            }
        }

    }
}
</style>