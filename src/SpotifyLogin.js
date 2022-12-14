const endpoint = 'https://accounts.spotify.com/authorize';
const client_id = '324ab4041a994202b2ad2040c06b1635';
const redirect_uri = 'http://localhost:5173/';
const scope = [
  //Spotify Connect
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  //Listening History
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
  //Playlists
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  //library
  "user-library-modify",
  "user-library-read",
  //User
  "user-read-email",
  "user-read-private"
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