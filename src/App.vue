<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="logo">
          <img src="@/assets/logo-alef.jpg" alt="ALEF logo" />
        </div>
        <div class="nav-links">
          <router-link to="/">Форма</router-link>
          <router-link to="/preview">Превью</router-link>
        </div>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>all rights reserved</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #fff;
  border-bottom: #bfbfbf 1px solid;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.logo {
  position: absolute;
  left: 20px;
}

.logo img {
  height: 35px;
  margin-left: 2vw;
}

.nav-links {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #6c6c6c;
  font-weight: 500;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f0f0f0;
  color: #666;
  font-size: 14px;
}
</style>
