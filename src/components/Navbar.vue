<template>
  <div class="main-nav">
    <router-link :to="{ name: 'home' }">وظایف</router-link>
    <router-link :to="{ name: 'AddTask' }">افزودن وظیفه</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-nav {
  text-align: center;
  margin: 40px auto;
}

.main-nav > a {
  display: inline-block;
  text-decoration: none;
  margin: 0 20px;
  color: #999;
  font-size: 18px;
  padding: 0 10px;
  transition: all 0.5s ease;
}

a.router-link-active {
  border-bottom: 2px solid #466266;
  padding-bottom: 7px;
  color: #0e1414;
}
</style>
