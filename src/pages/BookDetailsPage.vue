<template>
  <div>book details ById {{ $route.params.bookId }}</div>
  <div class="book-container">
    <BookContent :bookId="$route.params.bookId" />
  </div>
  <div class="review-container">
    <ReviewContent />
  </div>
</template>
<script>
export default {
  name: 'BookDetailsPage'
}
</script>
<style lang="scss">
.book-container {
  display: flex;
}
.review-container {
  display: flex;
}
</style>
