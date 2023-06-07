const cities = [
  {
    name: 'Chicago, IL',
    latitude: 41.9824701,
    longitude: -87.6591383
  },
  {
    name: 'Cleveland, OH',
    latitude: 41.4970614,
    longitude: -82.0354925
  },
  {
    name: 'Atlanta, GA',
    latitude: 33.732774,
    longitude: -84.4456547
  }
];

const selector = document.getElementById('citySelector');
selector.append(new Option('Select a City', ''));

cities.forEach((city) => {
  selector.append(new Option(city.name));
});

selector.addEventListener('change', () => {
  const cityName = selector.value;
  const city = cities.find((c) => c.name === cityName);

  const pointUrl = `https://api.weather.gov/points/${city.latitude},${city.longitude}`;
  fetch(pointUrl)
    .then((res) => res.json())
    .then((point) => fetch(point.properties.forecast))
    .then((res) => res.json())
    .then((fc) => {
      console.log(fc.properties.periods);
    });
});
