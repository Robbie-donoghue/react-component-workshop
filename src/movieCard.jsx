export default function MovieCard(props) {
  return (
    <div>
      <h2>{props.movieName}</h2>
      <img src={props.imgLink} alt="" />
      <h3>{props.director}</h3>
      <p>{props.year}</p>
    </div>
  );
}
