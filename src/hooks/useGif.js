import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag${tag}`;

  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("");

  async function fetchData() {
    // true declare here beacuse useState will render whole ui so we can see the loader
    setLoading(true);

    // destructureing to get data
    const { data } = await axios.get(tag ? tagUrl : randomUrl);
    const img = data.data.images.downsized_large.url;

    // set loading false for spinner
    setLoading(false);
    setGif(img);

    tag ? console.log("tag") : console.log("no tag")
  }

  // run on frist render only
  useEffect(() => {
    fetchData();
  }, []);

  return {
    gif,
    loading,
    fetchData,
  };
};

export default useGif;

//   const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
