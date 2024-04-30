<template>
  <div class="root-container">
    <HeaderSection />
    <main>
      <div class="test-body">
        <div></div>
      </div>
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
  height: 100vh;
}
.test-body > div {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 30vh;
  background-color: var(--bluegray-50);
}
</style>
