import { useState } from "react";
import memesData from "./memesData"

export default function Meme() {
  const randomize = () => {
    const memesArray = memesData.data.memes;
    let random = Math.floor(Math.random() * memesArray.length)
    return memesArray[random];
  }

  const randomMeme = () => {
    let newMeme = randomize()
    const url = newMeme.url;
    const name = newMeme.name;
    return {url, name};
  }

  const [memeUrl, setMemeUrl] = useState('');
  const [memeAlt, setMemeAlt] = useState('');

  const changeImage = () => {
    const rand = randomMeme()
    setMemeUrl(rand.url)
    setMemeAlt(rand.name)
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
      <img className="meme-img" src={memeUrl} alt={memeAlt} />
    </main>
  )
}