<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="d-flex flex-wrap bg-dark rounded align-items-center mx-4 mx-lg-5 mt-4 mb-2 px-4 px-lg-5 py-2">
      <div class="d-flex align-items-center mr-4">
        <img width="50px" class="py-1" src="/icon.png" alt="CHamburr">
        <p class="mb-0 mx-3 font-weight-bold text-white">CHamburr</p>
      </div>
      <div class="d-flex">
        <a href="/" class="nav-link pl-0 pr-3">Home</a>
        <a href="/blog" target="_blank" class="nav-link px-3">Blog</a>
        <a href="mailto:hi@chamburr.com" target="_blank" class="nav-link pl-3 pr-0">Contact</a>
      </div>
    </div>
    <nuxt class="flex-grow-1"/>
    <footer class="h5 text-center pt-2 pb-4 pb-lg-5">
      Copyright © CHamburr 2022
    </footer>
  </div>
</template>
