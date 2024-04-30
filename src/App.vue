<template>
  <div class="root-container">
    <HeaderSection />
    <main>
      <div class="main-container">
        <!-- this make outlet for router -->
        <router-view />
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

.main-container {
  min-height: 100vh;
}
.test-body > div {
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 30vh;
  background-color: var(--bluegray-50);
}
</style>
