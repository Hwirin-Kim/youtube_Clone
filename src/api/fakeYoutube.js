import axios from "axios";

//이 파일은 목데이터 통신을 위한 api
export default class FakeYoutube {
  constructor() {}

  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }
  async #searchByKeyword() {
    return (
      axios
        .get("/mockdata/search.json")
        .then((res) => res.data.items)
        // popular.json과 동일한 형식으로 포맷 변환 (search.json은 id안에 객체가 존재함)
        .then((items) =>
          items.map((item) => ({ ...item, id: item.id.videoId }))
        )
    );
  }
  async #mostPopular() {
    return axios.get("/mockdata/popular.json").then((res) => res.data.items);
  }
}
