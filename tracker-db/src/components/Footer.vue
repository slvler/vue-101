<template>
  <footer>
    <p>Copyright &copy; 2024</p>
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data(){
    return {}
  }
}
</script>

<style scoped>
a {
  color: #333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>