<template>
  <header class="sticky-header">
    <nav id="navbar" class="container">
      <div class="logo">logo</div>
      <div class="container-menu">
        <InputText id="searchbar" variant="filled" type="text" size="small" placeholder="Search" />
        <div id="menu-cart">carts</div>
        <div id="menu-favorites">favorites</div>
        <div id="menu-profile">profile</div>
        <div id="menu-burger">menu burger</div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import InputText from 'primevue/inputtext'
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

.container-menu {
  display: flex;
  gap: 0.75rem;
}

.container-menu > div {
  background-color: aliceblue;
  margin: auto;
  padding: 0.5rem;
}

#searchbar {
  width: 333px;
  padding: 0.5rem;
  margin: 1rem;
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
