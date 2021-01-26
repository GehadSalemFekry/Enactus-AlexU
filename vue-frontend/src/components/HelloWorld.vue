<template>
  <div class="hello">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="sidebar-top">
        <div class="logo">
          <img src="..\assets\enactus-logo.png" alt="" />
        </div>
        <div class="sign-btns">
          <a href="" class="btn-signup">Sign Up</a>
          <a href="" class="btn-signin">Sign in</a>
        </div>
      </div>

      <div class="sidebar-content">
        <a href="" class="side-link active">Home</a>
        <a href="" class="side-link">About Us</a>
        <a href="" class="side-link">Teams</a>
        <a href="" class="side-link">Productus</a>
        <a href="" class="side-link">Gallery</a>
        <a href="" class="side-link">Join Us</a>
        <a href="" class="side-link">Contact Us</a>
      </div>

      <div class="sidebar-bottom">
        <div class="social-heading">
          <h5>Social Media</h5>
        </div>
        <div class="social-icons">
          <a class="facebook" href="#"><img src="..\assets\facebook.png" /></a>
          <a class="twitter" href="#"><img src="..\assets\twitter.png" /></a>
          <a class="instagram" href="#"><img src="..\assets\instagram.png" /></a>
          <a class="linkedin" href="#"><img src="..\assets\linkedin.png" /></a>
        </div>
      </div>
    </div>
    <!--*-- Sidebar --*-->

    <!-- Open - Close Sidbar Button -->
    <div class="sidebar-btn">
      <button class="close-sidebar open-sidebar" v-on:click="show = !show">
        <img src="..\assets\backArrow.png" alt="" />
      </button>
    </div>
    <!--*-- Open - Close Sidbar Button --*-->

  </div>
</template>

<style scoped>
</style>