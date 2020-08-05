import axios from 'axios';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';
const YOUTUBE_AUTH_KEY = () => {
  const auth =
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_KEY
      : null;
  return auth;
};

export const searchVideos = async (searchText) => {
  const URL = `${YOUTUBE_API_URL}/search?part=snippet&q=${encodeURIComponent(
    searchText,
  )}&type=video&maxResults=25&key=${YOUTUBE_AUTH_KEY()}`;
  return axios.get(URL).then(
    (response) => Promise.resolve(response),
    (response) => Promise.reject(response.message),
  );
};

export const getVideoInfo = async (videoId) => {
  const urlParams = `part=snippet%2CcontentDetails%2Cstatistics&id=${encodeURIComponent(
    videoId,
  )}&key=${YOUTUBE_AUTH_KEY()}`;
  const URL = `${YOUTUBE_API_URL}/videos?${encodeURIComponent(urlParams)}`;

  return axios.get(URL).then(
    (response) => Promise.resolve(response),
    (response) => Promise.reject(response.message),
  );
};

export const getVideoComments = async (videoId) => {
  const urlParams = `part=snippet&videoId=${encodeURIComponent(
    videoId,
  )}&textFormat=plainText&key=${YOUTUBE_AUTH_KEY()}`;
  const URL = `${YOUTUBE_API_URL}/commentThreads?${encodeURIComponent(
    urlParams,
  )}`;

  return axios.get(URL).then(
    (response) => Promise.resolve(response),
    (response) => Promise.reject(response.message),
  );
};

export const getRelatedVideos = async (videoId) => {
  const urlParams = `part=snippet&relatedToVideoId=${encodeURIComponent(
    videoId,
  )}&type=video&key=${YOUTUBE_AUTH_KEY()}`;
  const URL = `${YOUTUBE_API_URL}/search?${encodeURIComponent(urlParams)}`;

  return axios.get(URL).then(
    (response) => Promise.resolve(response),
    (response) => Promise.reject(response.message),
  );
};
