<template>
  <div class="book-header-section">
    <div class="title-section">Best Selling Books</div>
    <div class="view-all-section"><i class="pi pi-chevron-right"></i>View All</div>
  </div>
  <div class="grid-container">
    <div v-for="card in bestSellingBooks.slice(0, 10)">
      <div class="grid-item">
        <Card class="card-container">
          <template #subtitle class="best-selling">
            <Chip label="Best Selling" icon="pi pi-dollar" />
          </template>
          <template #header>
            <img alt="bookImage" :src="imageEndPoint + card.book_image_data" />
          </template>
          <template>test</template>
          <template #title
            ><div>{{ card.book_name_en }}</div>
            <div style="display: flex">
              <div style="margin-right: 0.5rem; font-size: 12px">
                {{ card.book_base_price }} Bath
              </div>
              <div class="display-writer">{{ card.writer_name }}</div>
            </div>
            <div style="margin: 1rem; margin-bottom: 0">
              <Rating v-model="card.book_average_point" readonly :cancel="false" />
              <div style="margin-top: 0.25rem">(&nbsp; {{ card.book_average_point }}&nbsp; )</div>
            </div></template
          >

          <template #footer>
            <div class="card-footer">
              <Button size="small" label="Favorite" outlined />
              <Button size="small" label="Add Cart" />
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'

const url = import.meta.env.VITE_APP_API_URL_ENDPOINT
const imageEndPoint = import.meta.env.VITE_APP_IMAGE_ENDPOINT
const bestSellingBooks = ref([])
const loading = ref(true)
// const token = getCookie('token')

const fetchBestSellingBooks = () => {
  // if (!token) {
  //   return
  // }
  loading.value = true
  axios
    .get(url + 'bestsellingbooks', {
      // headers: {
      //   Authorization: 'Bearer ' + token
      // }
    })
    .then((res) => {
      bestSellingBooks.value = res.data
      console.log(res.data)
    })
    .finally(() => {
      console.log(bestSellingBooks.value)
      loading.value = false
    })
}

export default {
  setup() {
    return { imageEndPoint, bestSellingBooks }
  },
  mounted() {
    fetchBestSellingBooks()
  }
}
</script>

<style lang="scss">
.p-card {
  position: relative;
}
.p-card-subtitle {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  padding: 0.5rem;
}

.p-chip-text {
  font-weight: 500;
}
.p-chip {
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.book-header-section {
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  margin-right: 1rem;
}
.book-header-section .title-section {
  font-weight: 600;
}

.book-header-section .view-all-section {
  transform: scale(1);
  transition: transform 0.3s ease;
}
.book-header-section .view-all-section i {
  margin-right: 0.25rem;
  display: none;
  transition: all 0.3s ease-in-out;
}
.book-header-section .view-all-section:hover {
  cursor: pointer;
  transform: scale(1.05);
  transform: translateX(-10px);
  cursor: pointer;
  > i {
    display: inline;
  }
}

.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  column-gap: 6px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.card-footer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.p-card-title {
  font-size: 14px;
  margin: auto;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.display-writer {
  text-align: end;
  font-size: 12px;
  color: gray;
}

.display-writer:hover {
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: underline;
}

.p-rating {
  justify-content: center;
}

@media screen and (max-width: 1048px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 12px;
  }
}
@media screen and (max-width: 768px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    column-gap: 0;
    margin: auto;
    max-width: 320px;
  }
}
</style>
