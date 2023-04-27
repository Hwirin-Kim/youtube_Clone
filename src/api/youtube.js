import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return (
      this.httpClient
        .get("search", {
          params: {
            part: "snippet",
            maxResults: 25,
            type: "video",
            q: keyword,
          },
        })
        .then((res) => res.data.items)
        // popular.json과 동일한 형식으로 포맷 변환 (search.json은 id안에 객체가 존재함)
        .then((items) =>
          items.map((item) => ({ ...item, id: item.id.videoId }))
        )
    );
  }
  async #mostPopular() {
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
