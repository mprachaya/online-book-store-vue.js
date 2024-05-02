<template lang="">
  <div class="container">
    <div class="grid-item" v-if="bookDetails">
      <Image :src="imageEndPoint + bookDetails.book_image_data" alt="Image" width="250" preview />
    </div>
    <div class="grid-item">
      <TabView>
        <TabPanel header="Header I">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </TabPanel>
        <TabPanel header="Header II">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel header="Header III">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus.
          </p>
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
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
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
  text-align: start;
}

@media screen and (max-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>
