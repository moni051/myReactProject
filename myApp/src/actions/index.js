import axios from 'axios';

const apiKey = '5d4bbca788ef39df2eb09137f22926a2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);

  console.log('Request:', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
