<template>
  <div>
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend, ChartOptions } from 'chart.js';

// Global Chart.js registration (can be done in main.ts)
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

// Chart instance reference
const lineChart = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

const chartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 1,
      fill: true,
    },
  ],
};

// Chart Options (use 'ChartOptions' type to ensure proper structure)
const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Monthly Sales Data',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      type: 'category', // Explicitly define the type of the x-axis
      title: {
        display: true,
        text: 'Months',
      },
    },
    y: {
      type: 'linear', // Explicitly define the type of the y-axis
      beginAtZero: true,
      title: {
        display: true,
        text: 'Sales (in USD)',
      },
    },
  },
};

onMounted(() => {
  if (lineChart.value) {
    const ctx = lineChart.value.getContext('2d');
    if (ctx) {
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: chartOptions,
      });
    }
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
