<template>
  <div>
    <div class="img-home">
      <img src="../assets/img/home.jpg" />
      <div class="img-text">
        TODAY'S <span>LEADERS</span> .. <br />
        TOMORROW'S <span>CHANGERS</span>
      </div>
    </div>
    <div class="container">
      <div class="about">
        <h1 class="about-heading">Enactus Alexandria</h1>
        <hr />
        <p class="heading-details">
          Enactus is the world’s largest experiential learning platform
          dedicated to creating a better world <br />
          while developing the next generation of entrepreneurial leaders and
          <br />social innovators.
        </p>
        <div class="row">
          <div class="col-sm-4">
            <div class="icon">
              <img
                class="mx-auto d-block"
                src="../assets/img/icon1-about.png"
              />
            </div>
            <h4 class="text-center">Enrepreneurial</h4>
            <p>
              Having the perspective to see an opportunity and the talent to
              create value from that opportunity.
            </p>
          </div>

          <div class="col-sm-4">
            <div class="icon">
              <img
                class="mx-auto d-block"
                src="../assets/img/icon2-about.png"
              />
            </div>
            <h4 class="text-center">Action</h4>
            <p>
              The willingness to do something and the commitment to see it
              through even when the outcome is not guaranteed.
            </p>
          </div>

          <div class="col-sm-4">
            <div class="icon">
              <img
                class="mx-auto d-block"
                src="../assets/img/icon3-about.png"
              />
            </div>
            <h4 class="text-center">US</h4>
            <p>
              A group of people who see themselves connected in some important
              way; individuals that are part of a greater whole.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="gray-section">
      <div class="container">
        <div class="row">
          <div class="logo">
            <img src="../assets/img/about-logo.png" />
          </div>

          <div class="col-6">
            <h2 class="text-center font-weight-bolder">VISION</h2>
            <p class="text-center">
              To create a better, more sustainable world
            </p>
          </div>

          <div class="col-6">
            <h2 class="text-center font-weight-bolder">MISSION</h2>
            <p class="text-center">
              Engage the next generation of entrepreneurial leaders to use
              innovation and business principles to improve the world
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="product">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="product-heading">Product</h1>
            <hr />
          </div>

          <div class="col-sm-6">
            <div class="wood">
              <img src="../assets/img/wood-product.png" />
              <div class="product-name">Wood Project</div>
              <div class="product-details"><a href="#">Details</a></div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="limpio">
              <img src="../assets/img/limpio-product.png" />
              <div class="product-name">Limpio Project</div>
              <div class="product-details"><a href="#">Details</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-home {
  width: 100%;
  height: auto;
}
.img-home img {
  width: 100%;
}

.img-home .img-text {
  position: absolute;
  text-align: center;
  color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-weight: 900;
}
.img-home .img-text span {
  color: #fcc200;
}
.about-heading,
.product-heading {
  color: #fcc200;
  font-size: 30px;
  margin-top: 50px;
  text-align: center;
  font-weight: 900;
  font-size: 40px;
}
.about hr,
.product hr {
  width: 25%;
}
.about .heading-details,
.about p {
  text-align: center;
  margin-bottom: 60px;
}
.icon img {
  margin-bottom: 40px;
}
.gray-section {
  background: #ddd;
}
.row .logo {
  position: absolute;
}
.row .logo img {
  position: relative;
  bottom: 165px;
  left: 350%;
  width: 150px;
}
.gray-section {
  padding: 70px 0px;
  margin-top: 75px;
}
.product hr {
  margin-bottom: 50px;
}

.product {
  margin-bottom: 50px;
}

.wood img,
.limpio img {
  display: block;
  margin: 0px auto;
}
.wood .product-name,
.limpio .product-name,
.wood .product-details,
.limpio .product-details {
  position: absolute;
  top: 65%;
  left: 50%;
  font-size: 35px;
  transform: translate(-50%, -50%);
  color: #8d8d8d;
  font-weight: 900;
}
.wood .product-details,
.limpio .product-details {
  top: 85%;
}
.wood .product-details a,
.limpio .product-details a {
  color: #fff;
  font-weight: 400;
  background: #fcc200;
  border-radius: 8px;
  padding: 10px 40px;
  text-decoration: none;
  border: 1px solid #fcc200;
}
.wood .product-details a:hover,
.limpio .product-details a:hover {
  color: #fcc200;
  font-weight: 400;
  background: transparent;
}
@media (max-width: 575.98px) {
  .img-home .img-text {
    font-size: 20px;
    top: 15%;
  }
  .row .logo img {
    left: 53%;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
}

@media (min-width: 768px) and (max-width: 991.98px) {
}

@media (min-width: 992px) and (max-width: 1199.98px) {
}
</style>