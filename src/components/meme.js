import { useState } from "react";
import memesData from "./memesData"

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "",
    imageAlt: ""
  })

  const changeImage = () => {
    const memesArray = allMemeImages.data.memes;
    let random = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[random].url;
    const alt = memesArray[random].name;

    setMeme(prevMeme => ({
      ...prevMeme,
      imageUrl: url,
      imageAlt: alt
    }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" className="form__input" placeholder="Top text" />
        <input type="text" className="form__input" placeholder="Bottom text" />
        <button className="form__btn" onClick={changeImage}>Get a new meme image 🖼️</button>
      </form>
      <img className="meme-img" src={meme.imageUrl} alt={meme.imageAlt} />
    </main>
  )
}