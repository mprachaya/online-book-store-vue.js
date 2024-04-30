<template>
  <div class="root-container">
    <HeaderSection />
    <main>
      <div class="test-body">test</div>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
.root-container {
  max-width: 1440px;
  margin: auto;
}

.test-body {
  display: flex;
  height: 100vh;
}
</style>
