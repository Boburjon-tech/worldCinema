import { useCollectionsData } from "../../hooks/useCollectionsData";
import "./films.css";
import { Link } from "react-router-dom";

export default function Films() {
  const { data, isPending, error } = useCollectionsData();

  if (isPending) return <div className="loader_wrap"><span className="loader"></span></div>;
  if (error) return <p>Xatolik: {error} </p>;

  return (
    <div className="films_container">
    
      <div className="films_list">
        {data && data.films.map((item) => (
            <Link to={`/film/${item.id}`} className="film_div" key={item.id}>
                <button className="play_button"><img src={item.poster} alt={item.title}  />
                </button>
              <div className="film_abouts" style={{display:"flex",flexDirection:"column", alignItems:"start"}}>
                <h1 className="item_title" >{item.title}</h1>
                <p className="item_runtime"  >{item.runtime}minut</p>
                <p className="item_genre" >{item.genre}</p>
                <p className="item_country" >{item.country}</p>
                <p className="item_actors" >{item.actors}</p>
              </div>
              
            </Link>      
        ))}
      </div>
      
    </div>
  );
}
