import Axios from "axios";

export const playMusic = async (token, newReleases) => {
  const uri = newReleases.albums.items[0].uri;
  await Axios("	https://api.spotify.com/v1/me/player/play", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
    },
    data: {
      context_uri: uri,
    },
  });
};
