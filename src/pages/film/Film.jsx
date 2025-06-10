import { useCollectionsData } from "../../hooks/useCollectionsData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./film.css";
import { useState,useEffect } from "react";

function Film() {
     const {data,isPending,error}  =useCollectionsData()
     const {id} = useParams() 

      if (isPending) return <div className="loader_wrap"><span class="loader"></span></div>;
      if (error) return <p>Xatolik: {error}</p>;
      if (!data || !data.films) {
               return <p style={{ color: "white" }}>Ma'lumot topilmadi</p>;
      }
     const film = data.films.find((item)=>item.id==id);
     if(!film) return <p>Film not found</p>

    


  return (
    <div style={{display:"flex", flexDirection:"column",gap:"2rem"}}>
    <Link to="/films" className="go_back_link">{`< go Back`}</Link>
    <div className="film_main_div">

      <iframe
        width="640"
        height="360"
        src={film.filmUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      ></iframe>
    
    </div>
      <div className="film_abouts_wrapper">
          <h1 className="film_title">{film.title}</h1>
          <p className="film_genre">{film.genre}</p>
          <p className="film_country">{film.country}</p>
          <p className="film_actors">{film.actors}</p>
      </div>
    </div>
    
  )
}

export default Film
