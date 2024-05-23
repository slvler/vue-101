<script>
export default {
  name: "Furniture",
  data() {
    return {
      head: 'Our Furniture',
      desc: 'which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t an',
      button: 'Buy Now',
      variables: [
        {
          head: "brown Chair Design",
          price: "100.00",
          img: "https://i.ibb.co/whz6wD6/f1.png"
        },
        {
          head: "brown Chair Design",
          price: "100.00",
          img: "https://i.ibb.co/XzhRPyp/f2.png"
        },
        {
          head: "brown Chair Design",
          price: "100.00",
          img: "https://i.ibb.co/c19ksyJ/f3.png"
        },
        {
          head: "brown Chair Design",
          price: "100.00",
          img: "https://i.ibb.co/JCD070W/f4.png"
        },
        {
          head: "brown Chair Design",
          price: "100.00",
          img: "https://i.ibb.co/3cJqX3w/f5.png"
        },
        {
          head: "brown Chair Design",
          price: "100.00",
          img: "https://i.ibb.co/MMKSdJm/f6.png"
        },
      ]
    }
  }
}
</script>

<template>
  <div>
    <section class="furniture_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>
            {{ head }}
          </h2>
          <p>
            {{ desc }}
          </p>
        </div>
        <div class="row">

          <div v-for="item in variables" class="col-md-6 col-lg-4">
            <div class="box">
              <div class="img-box">
                <img v-bind:src="item.img" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  {{ item.head }}
                </h5>
                <div class="price_box">
                  <h6 class="price_heading">
                    <span>$</span> {{ item.price }}
                  </h6>
                  <a href="">
                    {{ button }}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>