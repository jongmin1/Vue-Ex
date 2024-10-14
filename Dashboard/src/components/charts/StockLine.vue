<template>
  <div>
    <canvas ref="lineChart"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// IEX Cloud API key (Replace with your own key)
const API_KEY = 'your_iex_cloud_api_key';

// Global Chart.js registration (can be done in main.ts)
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

// Chart instance reference
const lineChart = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

// Fetch Tesla stock data from IEX Cloud
const fetchStockData = async () => {
  try {
    // 테슬라의 주가 데이터를 1일 간격으로 가져옴
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/TSLA/chart/1d`, {
      params: {
        token: API_KEY,
      }
    });

    const stockData = response.data;

    // 시간 라벨과 주가 데이터를 배열에 담음
    const labels = stockData.map((data: any) => data.label);
    const stockPrices = stockData.map((data: any) => data.close);

    return { labels, stockPrices };
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return { labels: [], stockPrices: [] };
  }
};

// Chart Options (refactored to fit Chart.js v3.x structure)
const chartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Tesla Stock Price (1 Day)',
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
    },
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      type: 'category' as const,
      title: {
        display: true,
        text: 'Time',
      },
    },
    y: {
      type: 'linear' as const,
      beginAtZero: false,
      title: {
        display: true,
        text: 'Price (USD)',
      },
    },
  },
};

onMounted(async () => {
  if (lineChart.value) {
    const ctx = lineChart.value.getContext('2d');
    if (ctx) {
      const { labels, stockPrices } = await fetchStockData();
      
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Tesla Stock Price',
              data: stockPrices,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 1,
              fill: true,
            },
          ],
        },
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
