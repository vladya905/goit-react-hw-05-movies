import axios from 'axios';

export const URL = {
  IMG: 'https://image.tmdb.org/t/p/w342',
  PATH: 'movie',
  HOME: 'trending',
  SEARCH: 'search',
};

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '666f674b2147a48db5c31afa3c61145a',
  },
});

export async function trendingApiService(request) {
  try {
    const { data } = await instance.get(`${URL.HOME}/${URL.PATH}/${request}`);
    return data.results;
  } catch (e) {
    return Error(e);
  }
}

export async function searchApiService(request) {
  try {
    const { data } = await instance.get(`${URL.SEARCH}/${URL.PATH}`, {
      params: {
        language: 'en-US',
        query: request,
        include_adult: false,
      },
    });

    return data.results;
  } catch (e) {
    console.error(e);
  }
}

export async function movieApiService(request, id) {
  try {
    const { data } = await instance.get(`${URL.PATH}/${id}${request}`, {
      params: {
        language: 'en-US',
      },
    });

    return data;
  } catch (e) {
    console.error(e);
  }
}