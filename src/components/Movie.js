import React, { useEffect, useState } from "react";

function Movie(){

    const [movieList,setMovieList] = useState([])

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=703b2b4ff97ad0c38b332ea3de108629")
        .then(res => res.json())
        .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])

    console.log(movieList)
    
    return(
        <div>
            {movieList.map((movie)=>(
            <img style={{width: "300px",height:"250px",marginLeft:"10px",marginTop:"28px"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            ))}
        </div>

    )

}

export default Movie