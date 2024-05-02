<template lang="">
  <div class="container">
    <div class="grid-item">test</div>
    <div class="grid-item">test</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.container {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
}
.grid-item {
  border: 1px solid;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
