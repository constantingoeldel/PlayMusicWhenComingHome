require('dotenv').config()
let sonosButton = document.querySelector('.sonos_setup')

sonosButton.addEventListener('click', () => {
  window.location.href = `https://api.sonos.com/login/v3/oauth?client_id=${proces.env.CLIENT_ID}&response_type=code&state=testState&scope=playback-control-all&redirect_uri=https%3A%2F%2Fplay-music-when-coming-home.vercel.app%2F`
})
