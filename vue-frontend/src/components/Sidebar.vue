<template lang="en"> 
  <div>
    <b-button v-b-toggle.sidebar class="sidebar-btn"></b-button>
  
    <b-sidebar id="sidebar" no-header>
          <div class="sidebar-top">
          <div class="logo">
            <img src="..\assets\img\enactus-logo.png" alt="" />
          </div>
          <div class="sign-btns">
            <router-link to="/signup" class="btn-signup">Sign Up</router-link>
            <router-link to="/login" class="btn-signin">Log In</router-link>
          </div>
        </div>

        <div class="sidebar-content">
          <router-link to="/" class="side-link active">Home</router-link>
          <router-link to="/teams" class="side-link">Teams</router-link>
          <router-link to="/gallery" class="side-link">Gallery</router-link>
          <router-link to="/join" class="side-link">Join Us</router-link>
          <router-link to="/contactus" class="side-link">Contact Us</router-link>
        </div>

        <div class="sidebar-bottom">
          <div class="social-heading">
            <h5>Social Media</h5>
          </div>
          <div class="social-icons">
            <a class="facebook" href="https://www.facebook.com/EnactusAlexandriaUniversity/" target="_blank"><img src="..\assets\img\facebook.png"/></a>
            <a class="twitter" href="https://www.youtube.com/channel/UCmU_Jav9vR_ho0MwD-xqV_A/featured?view_as=public" target="_blank"><img src="..\assets\img\twitter.png"/></a>
            <a class="instagram" href="https://www.instagram.com/enactus_alex/" target="_blank"><img src="..\assets\img\instagram.png"/></a>
            <a class="linkedin" href="https://www.linkedin.com/company/enactusalexu" target="_blank"><img src="..\assets\img\linkedin.png"/></a>
          </div>
      </div>
    </b-sidebar>
  </div>
</template>