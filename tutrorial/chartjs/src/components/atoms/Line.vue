<template>
    <div>
      <!-- canvas element for rendering the chart -->
      <canvas id="myChart"></canvas>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
  } from 'chart.js';
  
  // Register the necessary Chart.js components
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);
  
  // Data and options configuration from your setup
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
  
  // Labels for the X-axis
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  // Sample data for datasets
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (100 - (-100)) + (-100))),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Dataset 2',
        data: Array.from({ length: DATA_COUNT }, () => Math.floor(Math.random() * (100 - (-100)) + (-100))),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };
  
  // Chart configuration
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Ensure type safety
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  // Chart initialization using onMounted
  onMounted(() => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;
    if (ctx) {
      new ChartJS(ctx, {
        type: 'line',
        data: data,
        options: chartOptions,
      });
    }
  });
  </script>
  