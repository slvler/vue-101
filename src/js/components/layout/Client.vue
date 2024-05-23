<script>
export default {
  name: "Client",
  data(){
    return {
      head: 'Testimonial',
      variables: [
        {
          head: "Siaalya",
          desc: " It is a long established fact that a reader will be distracted by the readable cIt is a long established fact that a reader will be distracted by the readable c",
          img: "https://i.ibb.co/fvCL04P/client.jpg",
          tag: 'carousel slide active'
        },
        {
          head: 'Anything embarrassing hidden in the middle',
          desc: 'alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
          img: 'https://i.ibb.co/fvCL04P/client.jpg',
          tag: 'carousel slide'
        },
        {
          head: "Molestias magni natus dolores odio commodi. Quaerat!",
          desc: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          img: 'https://i.ibb.co/fvCL04P/client.jpg',
          tag: 'carousel slide'
        },
      ]
    }
  }
}
</script>

<template>
  <div>
    <section class="client_section layout_padding-bottom">
      <div class="container">
        <div class="heading_container">
          <h2>
            {{ head }}
          </h2>
        </div>
        <div id="carouselExample2Controls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div v-for="value in variables" v-bind:class="value.tag">
              <div class="row">
                <div class="col-md-11 col-lg-10 mx-auto">
                  <div class="box">
                    <div class="img-box">
                      <img v-bind:src="value.img" alt="" />
                    </div>
                    <div class="detail-box">
                      <div class="name">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                        <h6>
                          {{ value.head }}
                        </h6>
                      </div>
                      <p>
                        {{ value.desc }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel_btn-container">
            <a class="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
              <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>