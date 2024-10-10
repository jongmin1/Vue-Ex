<template>
<div class="main">
      <nav class="navbar navbar-expand px-3 border-bottom">
        <button class="btn" id="sidebar-toggle" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse navbar">
          <ul class="navbar-nav">
            <li class="nav-item dropdown d-flex align-items-end">
              <span class="me-2 text-muted">user</span>
              <a href="#" data-bs-toggle="dropdown" class="nav-icon pe-md-0">
                <img src="../../assets/images/profile.jpg" class="avatar img-fluid rounded" alt="">
              </a>
              <div class="dropdown-menu dropdown-menu-end">
                <a href="#" class="dropdown-item ">Profile</a>
                <a href="#" class="dropdown-item">Setting</a>
                <a href="#" class="dropdown-item">Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
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
              <div class="card  flex-fill border-0">
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
              <h6 class="card-subtitle  text-muted">
                Lprem ipsum dolor sit am.,asmdfmsaldfkjlasdjflksdjf
              </h6>
            </div>
            <div class="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
           </div>
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