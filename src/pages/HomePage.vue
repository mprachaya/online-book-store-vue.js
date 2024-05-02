<template>
  <div class="ads-container">
    <AdsContent />
  </div>
  <div class="newbook-container">
    <NewBookContent />
  </div>
  <div class="bestselling-container">
    <BestsellingBookContent />
  </div>
</template>
<script>
export default {
  name: 'HomePage'
}
</script>
<style lang="scss">
.ads-container {
  margin-top: 0.5rem;
}
.newbook-container {
  margin: auto;
}
.bestselling-container {
  margin: auto;
}
</style>
