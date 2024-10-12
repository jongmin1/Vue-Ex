<template>
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
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '../../assets/styles/main.scss';
</style>