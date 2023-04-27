import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <div className="flex items-center" onClick={() => navigate("/")}>
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="text-3xl font-bold ml-2">Youtube</h1>
      </div>
      <form className="w-full flex justify-center" onSubmit={onSubmitHandler}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
