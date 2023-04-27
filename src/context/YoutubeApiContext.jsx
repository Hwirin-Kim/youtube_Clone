import { createContext, useContext } from "react";
import FakeYoutube from "../api/fakeYoutube";

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube();

export const YoutubeApiProvider = ({ children }) => {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
