import { useState } from "react";
import memesData from "./memesData"

export default function Meme() {
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    imageAlt: "One Does Not Simply"
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

  const handleChange = (evt) => {
    const {name, value} = evt.target;

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
  }

  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="form__input" 
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          type="text" 
          className="form__input" 
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form__btn" onClick={changeImage}>Get a new meme image 🖼️</button>
      </form>
      <div className="meme">
        <img className="meme__img" src={meme.imageUrl} alt={meme.imageAlt} />
        <h2 className="meme__text top">{meme.topText}</h2>
        <h2 className="meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}