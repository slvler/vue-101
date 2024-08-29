<script>
export default {
  name: "Blog",
  data(){
    return {
      head: 'Latest Blog',
      blogs: [
        {
          head: "Look even slightly believable. If you are",
          desc: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          img: "https://i.ibb.co/4Vwzjxj/b1.jpg",
        },
        {
          head: 'Anything embarrassing hidden in the middle',
          desc: 'alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.',
          img: 'https://i.ibb.co/JsHKsKN/b2.jpg',
        },
        {
          head: "Molestias magni natus dolores odio commodi. Quaerat!",
          desc: "alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
          img: 'https://i.ibb.co/wRzVqfR/b3.jpg',
        },
      ]
    }
  }
}
</script>

<template>
  <div>
    <section class="blog_section layout_padding">
      <div class="container">
        <div class="heading_container">
          <h2>
            {{ head }}
          </h2>
        </div>
        <div class="row">
          <div v-for="blog in blogs" class="col-md-6 col-lg-4 mx-auto">
            <div class="box">
              <div class="img-box">
                <img v-bind:src="blog.img" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  {{ blog.head }}
                </h5>
                <p>
                  {{ blog.desc }}
                </p>
                <a href="">
                  Read More
                </a>
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