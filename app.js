// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken =
  "pk.eyJ1IjoiY2FiYmFnZW1vbnN0ZXIiLCJhIjoiY2t0dWF1dnJpMXk0ZjJvbXB4bTEzNjdzdCJ9.mvQJu238Knmw69lGHD92Mg";
let resp, coord;


// const resp = await axios.get(`https://source.unsplash.com/collection/483251/`);
funcer = async () => {
  resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/Bucharest.json?limit=2&access_token=pk.eyJ1IjoiY2FiYmFnZW1vbnN0ZXIiLCJhIjoiY2t0dWF1dnJpMXk0ZjJvbXB4bTEzNjdzdCJ9.mvQJu238Knmw69lGHD92Mg`);
  coord = resp.data.features[0].geometry.coordinates;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: coord, // starting position [lng, lat]
    zoom: 5, // starting zoom
  });
  // console.log(coord)
  const marker = new mapboxgl.Marker()
  // .setLngLat([-74.5, 40])
  .setLngLat(coord)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>Deloitte</h3><p>Bucuresti</p>`
    )
  )
  .addTo(map);
};
funcer()
// console.log(coord)

// const marker = new mapboxgl.Marker()
//   // .setLngLat([-74.5, 40])
//   .setLngLat([-0.184387, 51.448956])
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 }).setHTML(
//       `<h3>Deloitte</h3><p>Bucuresti</p>`
//     )
//   )
//   .addTo(map);
