const setText = (id, value) => {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
};

const setHref = (id, value) => {
  const element = document.getElementById(id);

  if (element) {
    element.href = value;
  }
};

const setSrc = (id, value) => {
  const element = document.getElementById(id);

  if (element) {
    element.src = value;
  }
};

const getSpotifyEmbedUrl = (url) => {
  return url.replace("open.spotify.com/track/", "open.spotify.com/embed/track/") + "?utm_source=generator";
};

setText("logo", `\uD83C\uDFA4 ${artistData.name}`);
setText("artist-tagline", artistData.tagline);
setText("artist-name", artistData.name);
setText("artist-description", artistData.description);
setText("release-title", artistData.releaseTitle);
setText("release-description", artistData.releaseDescription);

setHref("spotify-link", artistData.spotify);
setHref("apple-link", artistData.appleMusic);
setHref("youtube-link", artistData.youtube);
setHref("instagram-link", artistData.instagram);
setHref("facebook-link", artistData.facebook);
setHref("tiktok-link", artistData.tiktok);
setHref("booking-link", `mailto:${artistData.bookingEmail}`);
setSrc("spotify-embed", getSpotifyEmbedUrl(artistData.spotify));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || href === "#" || !href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.getElementById("artist-name").textContent = artistData.name;
document.getElementById("artist-tagline").textContent = artistData.tagline;

document.getElementById("artist-description").textContent = artistData.description;
document.getElementById("release-title").textContent = artistData.releaseTitle;

document.getElementById("release-description").textContent = artistData.releaseDescription;
document.getElementById("spotify-link").href = artistData.spotify;
document.getElementById("apple-link").href = artistData.appleMusic;
document.getElementById("youtube-link").href = artistData.youtube;
document.getElementById("instagram-link").href = artistData.instagram;
document.getElementById("facebook-link").href = artistData.facebook;
document.getElementById("tiktok-link").href = artistData.tiktok;

document.getElementById("booking-link").href = `mailto:${artistData.bookingEmail}`;
document.getElementById("contact-booking-link").href = `mailto:${artistData.bookingEmail}`;
