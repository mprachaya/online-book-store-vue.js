<template>
  <div>
    <Button @click="visible = true">Login</Button>
    <Dialog
      v-if="!visibleRegis"
      v-model:visible="visible"
      modal
      header="Authenication"
      :style="{ width: '25rem', margin: '1rem' }"
    >
      <div class="input">
        <label for="username">Username</label>
        <InputText
          id="username"
          autocomplete="off"
          v-model="loginData.username"
          @keydown.enter="handleLogin"
        />
      </div>

      <div class="input">
        <label for="password">Password</label>
        <InputText
          id="password"
          type="password"
          autocomplete="off"
          v-model="loginData.password"
          @keydown.enter="handleLogin"
        />
      </div>
      <div class="footer">
        <span @click="visibleRegis = true">Sign up?</span>
        <div>
          <Button
            type="button"
            label="Cancel"
            severity="secondary"
            @click="visible = false"
          ></Button>
          <Button type="button" label="Login" @click="handleLogin"></Button>
        </div>
      </div>
    </Dialog>

    <Dialog
      v-model:visible="visibleRegis"
      modal
      header="Register Form"
      :style="{ width: '50rem', margin: '1rem' }"
    >
      <form @submit.prevent="handleSubmit">
        <div class="input">
          <label for="username">Username</label>
          <InputText id="username" v-model="formData.account_username" autocomplete="off" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <InputText
            id="password"
            type="password"
            v-model="formData.account_password"
            autocomplete="off"
          />
        </div>

        <div class="input">
          <label for="firstName">First Name</label>
          <InputText id="firstName" v-model="formData.member_first_name" autocomplete="off" />
        </div>
        <div class="input">
          <label for="lastName">Last Name</label>
          <InputText id="lastName" v-model="formData.member_last_name" autocomplete="off" />
        </div>
        <div class="input">
          <label for="email">Email</label>
          <InputText id="email" type="email" v-model="formData.member_email" autocomplete="off" />
        </div>
        <div class="input">
          <label for="phone">Phone</label>
          <InputMask
            id="phone"
            v-model="formData.member_phone"
            mask="(999) 999-9999"
            autocomplete="off"
          />
        </div>
        <div class="input">
          <label for="birthday">Birthday</label>
          <Calendar
            id="birthday"
            v-model="formData.member_birthday"
            mask="yyyy-mm-dd"
            autocomplete="off"
            style="width: 100%"
          />
        </div>
        <div class="footer">
          <span @click="visibleRegis = false">Sign in?</span>
          <div>
            <Button type="submit" label="Register" />
            <Button
              type="button"
              label="Cancel"
              severity="secondary"
              @click="visibleRegis = false"
            />
          </div>
        </div>
      </form>
    </Dialog>
  </div>
</template>

<script setup>
import { getCookie, setCookie } from '@/authen'
import axios from 'axios'
import { ref, watch } from 'vue'
const url = import.meta.env.VITE_APP_API_URL_ENDPOINT
const visible = ref(false) // for login dialog
const visibleRegis = ref(false) // for handleSubmit dialog
const loginData = ref({
  username: '',
  password: ''
})
const formData = ref({
  account_username: 'user' + Math.floor(Math.random() * 1000),
  account_password: '123456',
  member_first_name: 'Emma',
  member_last_name: 'Smith',
  member_address: '456 Elm St',
  member_address2: '', // optional
  member_email: 'emma.smith@example.com',
  member_phone: '099-123-4567',
  member_birthday: '05/02/1998'
})

// Function to validate form data
const validateForm = () => {
  const errors = {}

  // Loop through each property in the form data
  for (const key in formData.value) {
    if (formData.value.hasOwnProperty(key)) {
      // Check if the value is empty
      if (!formData.value[key] && key !== 'member_address2') {
        // Add error message for empty field
        errors[key] = `${key.replace('_', ' ')} is required`
      }
    }
  }

  return errors
}

const handleLogin = async () => {
  console.log({ ...loginData.value })
  if (loginData.value.username === '' || loginData.value.password === '')
    return alert('fill username and password')

  try {
    // Make POST request using Axios
    const response = await axios.post(url + 'login', {
      username: loginData.value.username,
      password: loginData.value.password
    })
    setCookie('token', response.data.token)
    setCookie('user', response.data.account_data)

    // console.log('Form submitted successfully!', response.data)
    alert('Login Successfully!')
    window.location.reload()
  } catch (error) {
    console.error('Error form:', error)
    alert(error.response.data.error)
    // Handle error
  }
}

const handleSubmit = async () => {
  const errors = validateForm()

  // If there are errors, display an alert
  if (Object.keys(errors).length > 0) {
    let errorMessage = 'Please fill in the following fields:\n'
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        errorMessage += `${errors[key]}\n`
      }
    }
    alert(errorMessage)
    return
  }

  const reformatFormData = {
    account: {
      account_username: formData.value.account_username,
      account_password: formData.value.account_password
    },
    member: {
      member_first_name: formData.value.member_first_name,
      member_last_name: formData.value.member_last_name,
      member_address: formData.value.member_address,
      member_address2: formData.value.member_address2,
      member_email: formData.value.member_email,
      member_phone: formData.value.member_phone,
      member_birthday: formData.value.member_birthday.split('/').reverse().join('-')
    }
  }
  console.log(reformatFormData)

  try {
    // Make POST request using Axios
    const response = await axios.post(url + 'register', reformatFormData)
    console.log('Form submitted successfully!', response.data)
    alert('Register Successfully!')
  } catch (error) {
    console.error('Error submitting form:', error)
    alert(error.response.data.error)
    // Handle error
  }

  //   // Submit form logic
  //   console.log('Form submitted successfully!')
}

const handleDialogClose = () => {
  // Reset form data when the dialog closes
  formData.value = {
    account_username: 'user' + Math.floor(Math.random() * 10000),
    account_password: '123456',
    member_first_name: 'Emma',
    member_last_name: 'Smith',
    member_address: '456 Elm St',
    member_address2: '', // optional
    member_email: 'emma.smith@example.com',
    member_phone: '099-123-4567',
    member_birthday: '05/02/1998'
  }
}

// if visibleRegis false then inistial formdata
watch(visibleRegis, (newValue) => {
  if (!newValue) {
    handleDialogClose()
  }
})
</script>

<style scoped lang="scss">
.input {
  display: block;
  margin: 0.5rem;
  margin-left: 0;
  gap: 1rem;
}
.input > .p-inputtext {
  width: 100%;
}
.footer {
  display: flex;
  justify-content: end;
  margin: 0.5rem;
}
.footer > div {
  display: flex;
  gap: 0.5rem;
}
.footer {
  > span {
    font-size: medium;
    color: darkcyan;
    margin: 0.5rem;
    margin-right: auto;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 768px) {
  .p-dialog {
    width: 90vw;
  }
}
</style>
