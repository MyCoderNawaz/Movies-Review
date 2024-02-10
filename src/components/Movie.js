const Movie = (props) => {
    return (
      <div className="movie">
          <img src={props.img} alt="404" />
          <p>{props.title}</p>
          <p>Year:{props.year}</p>
      </div>
    )
  }
  
  export default Movie
  