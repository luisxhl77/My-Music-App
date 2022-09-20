const endpoint = 'https://accounts.spotify.com/authorize';
const client_id = '4214432a3f4f407aa2e3667676cb1edc';
const redirect_uri = 'http://127.0.0.1:5173/';
const scope = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
]
export const loginURL = `${endpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope.join("%20")}&show_dialog=true`;

export const getTokenFromURL = ()=> {
  return window.location.hash.substring(1).split("&")
  .reduce((initial, item) => {
    let parts = item.split("=")
    initial[parts[0]] = decodeURIComponent(parts[1])
    return initial
  },{})
}