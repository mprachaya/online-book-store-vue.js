import VueCookies from 'vue-cookies'
// Function to set the cookie
export function setCookie(key, value) {
  const expirationDate = new Date()
  expirationDate.setDate(expirationDate.getDate() + 7) // Set expiration date to 7 days from now

  VueCookies.set(key, value, {
    expires: expirationDate // Set expiration date
  })

  console.log('Cookie set:', VueCookies.get(key))
}

export function getCookie(key) {
  return VueCookies.get(key)
}

export function logout() {
  VueCookies.remove('token')
  VueCookies.remove('user')
  window.location.reload()
}
