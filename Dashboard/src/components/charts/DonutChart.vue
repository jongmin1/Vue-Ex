<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, ChartData, ChartOptions } from 'chart.js';

// Global Chart.js registration (can be done in main.ts)
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

// Define the canvas element reference
const chartCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart<"doughnut", number[], string> | null = null;

// Chart Data
const chartData: ChartData<"doughnut", number[], string> = {
  labels: ['NONE', 'HOTEL', 'BNB', 'PENSION', 'GUESTHOUSE', 'HOTEL22'],
  datasets: [
    {
      label: 'Category Distribution',
      data: [60, 13.33, 13.33, 6.67, 3.33, 3.33],
      backgroundColor: ['#4e79a7', '#76b7b2', '#f28e2c', '#e15759', '#76c7c0', '#59a14f'],
      hoverBackgroundColor: ['#4e79a7', '#76b7b2', '#f28e2c', '#e15759', '#76c7c0', '#59a14f'],
    },
  ],
};

// Chart Options
const chartOptions: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'left',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => {
          const value = tooltipItem.raw;
          return `${tooltipItem.label}: ${value}%`;
        },
      },
    },
  },
};

onMounted(() => {
  if (chartCanvas.value) {
    chartInstance = new Chart(chartCanvas.value, {
      type: 'doughnut',
      data: chartData,
      options: chartOptions,
    });
  }
});

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy();
    chartInstance = null; // Free memory
  }
});
</script>

<style scoped>
div {
  height: 400px;
}
</style>
