import { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


export default function Tag() {
  
  const [tag, setTag] = useState("Pizza");

  const {gif, loading, fetchData} = useGif(tag);

  
  return (
    <div className=" w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-4 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt-[15px] ">{`Random ${tag} Gif`}</h1>
      
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" alt="Random gif"/>)
      }
      
      <input type="text"
        className="w-10/12 text-lg py-2 rounded-lg text-center bg-blue-100 "
        placeholder="Enter which gif you want ?"
       value={tag}
       onChange={(e) => setTag(e.target.value)}
      />

      <button onClick={(e) => fetchData()}
      className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px] text-center"
      >
        Generate
      </button>
    </div>
  );
}
