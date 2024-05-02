<template>
  <div class="main-container">
    <div class="book-container">
      <BookContent :bookId="$route.params.bookId" />
    </div>
    <Divider />
    <div class="review-container">
      <ReviewContent />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BookDetailsPage'
}
</script>
<style lang="scss" scoped>
.main-container {
  max-width: 1080px;
  margin: auto;
}
.book-container {
  display: flex;
}
.review-container {
  display: flex;
}
</style>
