<template>
  <header class="sticky-header">
    <nav id="navbar" class="container">
      <div class="logo">
        <i class="pi pi-book" style="font-size: 1.2rem"></i><span>BookWannabe</span>
      </div>
      <div class="container-menu">
        <div id="searchbar">
          <IconField iconPosition="left">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText v-model="value1" placeholder="Search" />
          </IconField>
        </div>
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
        <div v-else><LoginDialog /></div>
        <div id="menu-burger">menu</div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { getCookie, logout } from '@/authen'
import InputText from 'primevue/inputtext'

const userData = getCookie('user')
// console.log(userData)
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  background-color: white; /* Optional: Add background color for the sticky header */
  z-index: 1000; /* Optional: Adjust z-index as needed */
}

.container {
  display: flex;
  justify-content: space-between;
}

.logo {
  cursor: pointer;
  margin-left: 3rem;
  margin-top: auto;
  margin-bottom: auto;
}
.logo > i {
  margin: 0.5rem;
}

.container-menu {
  display: flex;
  gap: 0.75rem;
}

.container-menu > div {
  margin: auto;
  padding: 0.5rem;
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
  .container-menu > *:not(#menu-burger):not(#searchbar) {
    display: none;
  }
  .container-menu > div {
    margin: 0.5rem;
  }

  .logo {
    margin: auto;
    margin-left: 1rem;
  }
  #searchbar {
    width: fit-content;
  }
  #menu-burger {
    display: block;
    margin: auto;
    margin-right: 1rem;
  }
}
</style>
