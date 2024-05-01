<template>
  <div v-if="loading" class="skeleton-container">
    <Skeleton />
    <Skeleton />
  </div>
  <div v-else class="ads-container">
    <div class="grid-chile-container">
      <Carousel
        :value="mainAds"
        :numVisible="1"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <img
            :src="imageEndPoint + slotProps.data.advert_image_file_name"
            :alt="slotProps.data.advert_name"
          />
        </template>
      </Carousel>
    </div>
    <div class="grid-chile-container">
      <Carousel
        class="sub-ads"
        :value="subAds"
        :numVisible="1"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <img
            :src="imageEndPoint + slotProps.data.advert_image_file_name"
            :alt="slotProps.data.advert_name"
          />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const url = import.meta.env.VITE_APP_API_URL_ENDPOINT
const imageEndPoint = import.meta.env.VITE_APP_IMAGE_ENDPOINT
const mainAds = ref([])
const subAds = ref([])
const loading = ref(true)

const fetchAds = () => {
  loading.value = true
  axios
    .get(url + 'adverts')
    .then((res) => {
      mainAds.value = res.data.adverts_main
      subAds.value = res.data.adverts_sub
    })
    .finally(() => {
      console.log(mainAds.value)
      console.log(subAds.value)
      loading.value = false
    })
}
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])

onMounted(() => {
  fetchAds()
})
</script>

<style lang="scss">
.p-carousel {
  position: relative;
}

.skeleton-container {
  display: grid;
  grid-template-columns: 1040px 446px;

  gap: 1rem;
}
.p-skeleton {
  min-height: 500px;
}

.ads-container {
  display: grid;
  grid-template-columns: 1040px 446px;
}

img {
  width: 100%;
}
@media screen and (max-width: 1268px) {
  .ads-container {
    display: flex;
    flex-direction: column;
  }
  .skeleton-container {
    display: flex;
    flex-direction: column;
  }
  .sub-ads {
    width: 80%;
    margin: auto;
  }
}
</style>
