import Axios from "axios";

export const fetchNewReleases = async (token, setNewReleases) => {
  const data = await Axios(
    "https://api.spotify.com/v1/browse/new-releases?country=SE",
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  ).then((response) => {
    return response.data.albums.items;
  });
  setNewReleases(data);
};

export const displayNewReleases = (newReleases) => {
  let displayReleases = newReleases.map(function (item) {
    const releaseDateArray = item.release_date.split("-");
    const date = new Date(
      releaseDateArray[0],
      releaseDateArray[1],
      releaseDateArray[2]
    );
    const month = date.toLocaleString("default", { month: "long" });

    let songName = item.name;
    if (songName.length > 24) {
      songName = songName.slice(0, 18);
      songName = songName + "...";
    }

    return (
      <>
        <div className="song-card">
          <img src={item.images[0].url} alt="img" />
          <h4>{songName}</h4>
          <h5>
            {releaseDateArray[2]} {month}
          </h5>
        </div>
      </>
    );
  });
  return displayReleases;
};
