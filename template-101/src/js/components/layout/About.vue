<script>

export default {
  name: "About",
  data() {
    return {
      img: 'https://i.ibb.co/QQZxDnF/about-img.jpg',
      head: 'About Us',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.'
    }
  }
}
</script>

<template>
  <div>
    <section class="about_section layout_padding long_section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="img-box">
              <img v-bind:src="img" alt="">
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2>{{ head }}</h2>
              </div>
              <p>{{ desc }}</p>
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>