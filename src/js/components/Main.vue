<template>
  <div id="Main">

    <Hero></Hero>
    <Furniture></Furniture>
    <About></About>
    <Blog></Blog>
    <Client></Client>
    <Contact></Contact>
    <Info></Info>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./layout/Footer.vue";
import Hero from "./layout/Hero.vue";
import Furniture from "./layout/Furniture.vue";
import About from "./layout/About.vue";
import Blog from "./layout/Blog.vue";
import Client from "./layout/Client.vue";
import Contact from "./layout/Contact.vue";
import Info from "./layout/Info.vue";

export default {
  name: "Main",
  components: {Info, Contact, Client, Blog, About, Furniture, Hero, Footer}
}
</script>

<style scoped>
</style>