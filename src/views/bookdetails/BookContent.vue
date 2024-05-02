<template lang="">
  <div class="container">
    <div class="grid-item" v-if="bookDetails">
      <Image :src="imageEndPoint + bookDetails.book_image_data" alt="Image" width="250" preview />
    </div>
    <div class="grid-item">
      <TabView>
        <TabPanel header="Book Details">
          <div class="book-header">
            <span>{{ bookDetails.book_name_en }}</span>
            <span class="writer-name">{{ bookDetails.writer_name }}</span>
            <Rating v-model="bookDetails.book_average_point" readonly :cancel="false" />
          </div>
          <div>
            <div class="book-cover">
              <div>{{ bookDetails.book_cover_type }}</div>
              <span>{{ bookDetails.book_base_price }} Bath</span>
              <span style="margin-left: 0.2rem">({{ bookDetails.book_amount }} ea)</span>
            </div>
          </div>
          <div class="book-specific">
            <div>
              <div>pages</div>
              <i class="pi pi-book" style="font-size: 1rem"></i>
              <div>{{ bookDetails.book_total_page }}</div>
            </div>
            <div>
              <div>size</div>
              <i class="pi pi-box" style="font-size: 1rem"></i>
              <div>{{ bookDetails.book_total_page }}</div>
            </div>
            <div>
              <div>weight</div>
              <i class="pi pi-gauge" style="font-size: 1rem"></i>
              <div>{{ bookDetails.book_total_page }}</div>
            </div>
            <div>
              <div>barcode</div>
              <i class="pi pi-barcode" style="font-size: 1rem"></i>
              <div>{{ bookDetails.book_total_page }}</div>
            </div>
          </div>
          <div class="footer-action">
            <span id="menu-cart"
              >add to cart <i class="pi pi-shopping-cart" style="font-size: 1rem"></i
            ></span>
            <span id="menu-favorites"
              >favorites <i class="pi pi-heart-fill" style="font-size: 0.9rem"></i
            ></span>
          </div>
        </TabPanel>
        <TabPanel header="Description">
          <p>
            {{ bookDetails.book_description }}
          </p>
        </TabPanel>
        <TabPanel header="Book Related">
          <!-- <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus.
          </p> -->
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import axios from 'axios'
import router from '@/router'

const url = import.meta.env.VITE_APP_API_URL_ENDPOINT
const imageEndPoint = import.meta.env.VITE_APP_IMAGE_ENDPOINT
const bookDetails = ref([])
const loading = ref(true)

const fetchBookDetails = (bookId) => {
  loading.value = true
  axios
    .get(url + 'book_detail/' + bookId, {
      // headers: {
      //   Authorization: 'Bearer ' + token
      // }
    })
    .then((res) => {
      bookDetails.value = res.data.book_detail[0]
      console.log(res.data.book_detail)
    })
    .finally(() => {
      // console.log(bookDetails.value)
      loading.value = false
      // Check if book_id is 0 and redirect if necessary
      if (!bookDetails.value.book_id) {
        router.push('/')
        console.log('test')
      }
    })
}

export default {
  props: {
    bookId: Number
  },
  setup(props) {
    fetchBookDetails(props.bookId)
    return { bookDetails, imageEndPoint }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 70%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  margin: auto;
  margin-top: 2rem;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 30px;
  text-align: center;
}
.p-image {
  width: 300px;
}
p {
  overflow-y: scroll;
  max-height: 300px;
  text-align: justify;
}
.book-header {
  margin-top: 1.2rem;
  font-size: 14px;
  display: flex;
  gap: 0.5rem;
}
.book-header .writer-name {
  text-decoration: underline;
  cursor: pointer;
}

.book-cover {
  max-width: 400px;
  font-size: 14px;
  display: block;
  margin-top: 1rem;
  padding: 0.5rem;
  height: 60px;
  background-color: var(--gray-200);
  border-radius: 15px;
}
.book-specific {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20%;
  margin-top: 2rem;
  justify-content: start;
}
.book-specific > div {
  font-size: 12px;
  line-height: 1.6rem;
}
.p-tabview {
  width: 500px;
  min-width: 330px;
}
.footer-action {
  display: flex;
  margin-top: 4.8rem;
  gap: 1.5rem;
}
.footer-action > span {
  border-radius: 24px 4px 4px 4px;
  border: 1px solid;
  padding: 0.75rem;
  background-color: white;
  transition: all 0.1s ease-out;
}
.footer-action > span:hover {
  cursor: pointer;
  border-radius: 0px 24px 24px 24px;
  color: white;
  background-color: black;
  scale: 1.1;
}

@media screen and (max-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: auto;
    margin: auto;
  }
  .book-header {
    margin: 1rem;
    justify-content: center;
  }
  .book-cover {
    margin: auto;
  }
  .book-specific {
    justify-content: center;
  }
  .footer-action {
    margin-top: 4rem;
    margin-bottom: 2rem;
    justify-content: center;
  }
  .p-tabview {
    width: auto;
  }
}
</style>
