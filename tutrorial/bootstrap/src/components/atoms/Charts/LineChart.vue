<template>
    <div>
      <canvas id="lineChart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js'
  
  // Register Chart.js components
  Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend)
  
  // Chart instance reference to clean up
  const chartInstance = ref<Chart | null>(null)
  
  onMounted(() => {
    const ctx = (document.getElementById('lineChart') as HTMLCanvasElement).getContext('2d')
  
    if (ctx) {
      chartInstance.value = new Chart(ctx, {
        type: 'line',
        data: {
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
        },
        options: {
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
              title: {
                display: true,
                text: 'Months',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Sales (in USD)',
              },
            },
          },
        },
      })
    }
  })
  
  </script>
  