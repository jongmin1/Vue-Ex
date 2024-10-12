<template>
  <div class="main">
    <Navbar />
    <main class="content px-3 py-2">
      <div class="container-fluid">
        <div class="mb-3">
          <h4>Admin Dashboard</h4>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 d-flex">
            <div class="card flex-fill border-0 illustration">
              <div class="card-body p-0 d-flex flex-fill">
                <div class="row g-0 w-100">
                  <div class="col-6">
                    <div class="p-3 m-1">
                      <h4>Welcome Back, Admin</h4>
                      <p class="mb-0">Admin Dashboard</p>
                    </div>
                  </div>
                  <div class="col-6 align-self-end text-end">
                    <img src="../../assets/images/customer-support.jpg" class="img-fluid illustration-img" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 d-flex">
            <div class="card flex-fill border-0">
              <div class="card-body py-4">
                <div class="d-flex align-items-start">
                  <div class="flex-grow-1">
                    <h4 class="mb-2">
                      $ 78.0
                    </h4>
                    <p class="mb-2">
                      Total Earnings
                    </p>
                    <div class="mb-0">
                      <span class="badge text-success me-2">
                        +9.0%
                      </span>
                      <span class="text-muted">
                        Since Last Month
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Table Element -->
        <div class="card border-0">
          <div class="card-header">
            <h5 class="card-title">
              Basic Table
            </h5>
            <h6 class="card-subtitle text-muted">
              Lprem ipsum dolor sit am.,asmdfmsaldfkjlasdjflksdjf
            </h6>
          </div>
          <div class="card-body">
            <TableData />
          </div>
        </div>
        <!-- temp -->
        <div class="row">
          <div class="col-12 col-md-6 d-flex">
            <div class="card border-0 flex-fill">
              <div class="card-header">
                <h5 class="card-title">
                  Line Chart
                </h5>
              </div>
              <div class="card-body">
                <LineChart />
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 d-flex">
            <div class="card border-0 flex-fill">
              <div class="card-header">
                <h5 class="card-title">
                  Donut Chart
                </h5>
              </div>
              <div class="card-body">
                <DonutChart />
              </div>
            </div>
          </div>
        </div>
        <!-- temp end -->
        <div class="card border-0">
          <div class="card-header">
            <h5 class="card-title">
              Line Chart
            </h5>
          </div>
          <div class="card-body">
            <LineChart />
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="container-fluid">
        <div class="row text-muted">
          <div class="col-6 text-start">
            <p class="mb-0">
              <a href="#" class="text-muted">
                <strong>Jongmin</strong>
              </a>
            </p>
          </div>
          <div class="col-6 text-end">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="#" class="text-muted">Contact</a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-muted">About Us</a>
              </li>
              <li class="list-inline-item">
                <a href="#" class="text-muted">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import LineChart from '../charts/LineChart.vue';
import TableData from '../tables/TableData.vue';
import Navbar from './Navbar.vue';
import DonutChart from '../charts/DonutChart.vue';

onMounted(() => {
  const sidebarToggle = document.querySelector("#sidebar-toggle");
  sidebarToggle?.addEventListener("click", function() {
    const sidebar = document.querySelector('#sidebar');
    sidebar?.classList.toggle("collapsed");
  });
});
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';
</style>
