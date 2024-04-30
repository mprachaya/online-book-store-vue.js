<template>
  <footer>
    <div class="container">
      <div class="logoAndDesc">logo and desc</div>
      <div class="listContainer">
        <ul>
          <li class="listSection">Download</li>
          <li>Windows app</li>
          <li>mac app</li>
          <li>Linux app</li>
          <li>Desktop app</li>
        </ul>
        <ul>
          <li class="listSection">Sevices</li>
          <li>Windows app</li>
          <li>mac app</li>
        </ul>
      </div>
      <div class="listContainer">
        <ul>
          <li class="listSection">Products</li>
          <li>Web</li>
          <li>App</li>
          <li>Software</li>
          <li>Ecommerce</li>
        </ul>
        <ul>
          <li class="listSection">Company</li>
          <li>Terms & conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div class="listContainer">
        <ul>
          <div class="listSection">Get in touch</div>
          <i class="pi pi-facebook" style="font-size: 1.75rem"></i>
          <i class="pi pi-twitter" style="font-size: 1.75rem"></i>
          <i class="pi pi-github" style="font-size: 1.75rem"></i>
        </ul>
      </div>
    </div>
    <Divider />
    <div>@2024 Made By Prachaya</div>
  </footer>
</template>

<script setup>
import Divider from 'primevue/divider'
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  min-height: 300px;
}
.container > div {
  width: 50%;
}
.logoAndDesc {
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  justify-content: center;
}
.listContainer {
  padding: 0rem;
}
.listSection {
  list-style: none;
  font-weight: 600;
}

.listContainer > ul:last-child {
  padding-bottom: 2rem;
}

.listContainer > ul > :not(i:first-child) {
  margin: 0.5rem;
}

footer > div:last-child {
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
  padding-bottom: 3.5rem;
}

ul {
  padding-top: 1rem;
}
ul > li {
  list-style: none;
  text-align: left; // Align the text of li elements to the left
  margin: 0.75rem;
}
</style>
