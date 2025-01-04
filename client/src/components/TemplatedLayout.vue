<script setup>
import Logo from "@/components/Logo.vue";
</script>

<template>
  <header class="header border-bottom py-3">
    <div class="header__body container">
      <div class="row align-items-center">
        <div class="header__left col-6 col-lg-4">
          <Logo fontSize="h3" />
        </div>
        <div class="header__middle col-lg-4 d-none d-lg-block">
          <form style="margin-bottom: 0px">
            <div class="input-group">
              <input type="text" class="form-control form-control-sm bg-light" placeholder="Search" required />
              <button class="btn btn-primary">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="header__right col-6 col-lg-4">
          <div class="d-flex justify-content-end align-items-center gap-3">
            <a href="#" class="icon-link">
              <i class="bi bi-person-circle h4"></i>
            </a>
            <a href="#" class="icon-link">
              <i class="bi bi-bag h4"></i>
            </a>
            <a href="#" class="icon-link d-block d-lg-none">
              <i class="bi bi-list h4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Nav -->
    <div class="header__nav navbar navbar-expand navbar-light d-none d-lg-block mt-2 pb-0">
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <button class="btn btn-primary px-3" data-bs-toggle="dropdown">
              <i class="bi bi-grid"></i>
              <span class="ms-2">Categories</span>
            </button>
            <ul class="dropdown-menu">
              <li>
                <a href="" class="dropdown-item">Test</a>
              </li>
            </ul>
          </li>
          <li class="nav-item header__nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item header__nav-item">
            <a href="#" class="nav-link">Shop</a>
          </li>
          <li class="nav-item header__nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item header__nav-item">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TemplatedLayout",
};
</script>
