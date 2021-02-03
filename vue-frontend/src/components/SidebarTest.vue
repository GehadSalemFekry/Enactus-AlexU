<template>
  <div>
    <div class="sidebar-btn">
      <b-button v-b-toggle.sidebar-no-header class="close-sidebar open-sidebar"><img src="..\assets\img\arrow-r.png" /></b-button>
    </div>

    <b-sidebar class="sidebar" id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template>
        <div class="sidebar-top">
          <div class="logo">
            <img src="..\assets\img\enactus-logo.png" alt="" />
          </div>
          <div class="sign-btns">
            <a href="/signup" class="btn-signup">Sign Up</a>
            <a href="/signin" class="btn-signin">Log In</a>
          </div>
        </div>
        <div class="sidebar-content">
          <a href="/" class="side-link active">Home</a>
          <a href="/teams" class="side-link">Teams</a>
          <a href="/products" class="side-link">Products</a>
          <a href="/gallery" class="side-link">Gallery</a>
          <a href="/joinus" class="side-link">Join Us</a>
          <a href="/contactus" class="side-link">Contact Us</a>
        </div>
        <div class="sidebar-bottom">
          <div class="social-heading">
            <h5>Social Media</h5>
          </div>
          <div class="social-icons">
            <a class="facebook" href="#"><img src="..\assets\img\facebook.png"/></a>
            <a class="twitter" href="#"><img src="..\assets\img\twitter.png"/></a>
            <a class="instagram" href="#"><img src="..\assets\img\instagram.png"/></a>
            <a class="linkedin" href="#"><img src="..\assets\img\linkedin.png"/></a>
          </div>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>