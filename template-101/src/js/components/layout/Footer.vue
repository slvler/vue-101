<script>
export default {
  name: "Footer",
  data() {
    return {
      section: 'All Rights Reserved By',
      text: 'Html Templates',
      link: 'https://google.com'
    }
  }
}
</script>
<template>
  <div>
    <footer class="footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> {{ section }}
          <a v-bind:href="link">{{ text }}</a>
        </p>
      </div>
    </footer>
  </div>
</template>
<style scoped>

</style>