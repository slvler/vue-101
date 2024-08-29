<script>
export default {
  name: "Hero",
  data(){
    return {
      variables: [
        {
          head: "For All Your Furniture Needs",
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.',
          img: "https://i.ibb.co/vqJb69T/slider-img.png",
          tag : 'carousel-item active'
        },
        {
          head: "For All Your Furniture Needs",
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.',
          img: "https://i.ibb.co/vqJb69T/slider-img.png",
          tag : 'carousel-item'
        },
        {
          head: "For All Your Furniture Needs",
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.',
          img: "https://i.ibb.co/vqJb69T/slider-img.png",
          tag : 'carousel-item'
        },
      ]
    }
  }
}
</script>

<template>
  <div>
    <div class="hero_area">
      <header class="header_section long_section px-0">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="index.html">
          <span>
            Edgecut
          </span>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="about.html"> About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="furniture.html">Furnitures</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="blog.html">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div class="quote_btn-container">
              <a href="">
              <span>
                Login
              </span>
                <i class="fa fa-user" aria-hidden="true"></i>
              </a>
              <form class="form-inline">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <section class="slider_section long_section">
        <div id="customCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">

            <div v-for="item in variables" v-bind:class="item.tag">
              <div class="container ">
                <div class="row">
                  <div class="col-md-5">
                    <div class="detail-box">
                      <h1>
                        {{ item.head }}
                      </h1>
                      <p>
                      {{ item.desc }}
                      </p>
                      <div class="btn-box">
                        <a href="" class="btn1">
                          Contact Us
                        </a>
                        <a href="" class="btn2">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="img-box">
                      <img v-bind:src="item.img" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <ol class="carousel-indicators">
            <li data-target="#customCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#customCarousel" data-slide-to="1"></li>
            <li data-target="#customCarousel" data-slide-to="2"></li>
          </ol>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>

</style>