import axios from "axios";

//이 파일은 목데이터 통신을 위한 api
export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/mockdata/related.json")
      : axios.get("/mockdata/search.json");
  }
  async videos() {
    return axios.get("/mockdata/popular.json");
  }
  async channels() {
    return axios.get("/mockdata/channel.json");
  }
}
