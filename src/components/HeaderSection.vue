<template>
  <header class="sticky-header" :class="{ change_color: scrollPosition > 50 }">
    <nav id="navbar" class="container">
      <div class="logo">
        <i class="pi pi-book" style="font-size: 1.2rem"></i><span>Wannabe</span>
      </div>
      <div class="container-menu">
        <div v-if="userData" class="container-menu">
          <span id="menu-cart"
            >carts <i class="pi pi-shopping-cart" style="font-size: 1rem"></i
          ></span>
          <span id="menu-favorites"
            >favorites <i class="pi pi-heart-fill" style="font-size: 0.9rem"></i
          ></span>
          <span id="menu-profile">profile <i class="pi pi-user" style="font-size: 1rem"></i></span>
          <span id="menu-profile" @click="logout" class="logout">logout</span>
        </div>
        <div class="loginBtn" v-else><LoginDialog /></div>
        <div id="searchbar">
          <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText v-model="value1" placeholder="Search" />
          </IconField>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { getCookie, logout } from '@/authen'
import InputText from 'primevue/inputtext'
import { ref } from 'vue'

export default {
  setup() {
    const userData = getCookie('user')
    const scrollPosition = ref(1)

    const updateScroll = () => {
      scrollPosition.value = window.scrollY
    }

    window.addEventListener('scroll', updateScroll)
    return {
      scrollPosition, // Expose showHeader to the template
      userData
    }
  }
}

// console.log(userData)
</script>

<style scoped>
.sticky-header {
  padding: 1rem;
  padding-bottom: 0.25rem;
  border-radius: 0px 0px 12px 12px;
  position: sticky;
  top: 0;
  background-color: white; /* Optional: Add background color for the sticky header */
  z-index: 1000; /* Optional: Adjust z-index as needed */
  transition: all 0.3s ease-out;
}
.change_color {
  transition: all 0.3s ease-in;
  background-color: rgba(218, 239, 231, 0.95);
}

.container {
  display: flex;
  justify-content: space-between;
}

.logo {
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
}
.logo > i {
  margin: 0.5rem;
}

.logo > span {
  font-size: 13px;
}

.container-menu > div {
  margin: auto;
  padding: 0.25rem;
  padding-right: 0;
}
.container-menu {
  > span {
    color: var(--gray-800);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    margin: auto;
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      text-decoration: underline;
      color: white;
      background-color: var(--gray-800);
      border-radius: 25px;
    }
  }

  > span.logout {
    margin-left: 1.2rem;
    border: 1px solid black;
    border-radius: 12px 5px 5px;
    padding: 6px;
    transition: all 0.3s ease;
    &:hover {
      text-decoration: none;
      background-color: black;
      color: white;
      border-top-left-radius: 0px;
    }
  }
}

.loginBtn {
  text-align: end;
}

#searchbar {
  margin: auto;
}

.p-inputtext {
  font-size: 12px;
  width: 333px;
}

.p-inputtext {
  outline: none;
}

#menu-burger {
  display: none;
  cursor: pointer;
}

/* Styles for screens smaller than 768px (tablets and below) */
@media screen and (max-width: 768px) {
  .sticky-header {
    padding: 0.2rem;
  }
  .container-menu > div {
    margin: 0.5rem;
  }

  .logo {
    margin: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  #searchbar {
    display: none;
  }
  #menu-burger {
    display: block;
    margin: auto;
    margin-right: 1rem;
  }
  .logo > span {
    display: none;
  }
  .logo > i {
    margin: 0;
  }
}
</style>
