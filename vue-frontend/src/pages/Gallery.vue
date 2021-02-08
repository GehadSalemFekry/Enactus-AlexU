<template lang="en">
  <div id="gallery">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="heading">Gallery</h1>
          <hr />
        </div>

        <!-- <div class="title-container">
          <div class="filters">
              <button class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</button>
              <button class="filter" v-bind:class="{ active: currentFilter === 'GA' }" v-on:click="setFilter('GA')">General Assembly</button>
              <button class="filter" v-bind:class="{ active: currentFilter === 'GOT' }" v-on:click="setFilter('GOT')">General Orientation Training</button>
              <button class="filter" v-bind:class="{ active: currentFilter === 'OC' }" v-on:click="setFilter('OC')">Opening Ceremony</button>
          </div>
        </div>

        <transition-group class="projects" name="projects" >
          <div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
            <div class="project-image-wrapper">
              <img class="project-image" v-bind:src="project.image">
              <div class="gradient-overlay"></div>
              <div class="circle">
                <span class="project-title">{{project.title}}</span>
              </div>
            </div>
          </div>
        </transition-group> -->

        <div class="col-12">
            <b-card no-body>
              <b-tabs pills card>
                <b-tab title="All" active>
                  <b-card-text>
                    <b-card-group columns>
                      <b-card img-src="../assets/img/gallery/gallery-ga-1.png" img-alt="Image" overlay></b-card>
                      <b-card img-src="../assets/img/gallery/gallery-ga-2.png" img-alt="Image" overlay></b-card>
                      <b-card img-src="../assets/img/gallery/gallery-got-1.png" img-alt="Image" overlay></b-card>
                      <b-card img-src="../assets/img/gallery/gallery-oc-1.png" img-alt="Image" overlay></b-card>
                      <b-card img-src="../assets/img/gallery/gallery-oc-2.png" img-alt="Image" overlay></b-card>
                    </b-card-group>
                  </b-card-text>
                </b-tab>
              </b-tabs>
            </b-card>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  // data: {
  //     currentFilter: "ALL",
  //     projects: [
  //       {
  //         title: "General Assembly",
  //         image: "assets/img/gallery/gallery-ga-1.png",
  //         category: "GA",
  //       },
  //       {
  //         title: "General Orientation Training",
  //         image: "../assets/img/gallery/gallery-got-1.png",
  //         category: "GOT",
  //       },
  //       {
  //         title: "Opening Ceremony",
  //         image: "../assets/img/gallery/gallery-oc-1.png",
  //         category: "OC",
  //       },
  //     ],
  //   },
  // methods: {
  //   setFilter: function (filter) {
  //     this.currentFilter = filter;
  //   },
  // }
};
</script>