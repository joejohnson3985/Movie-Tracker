import React, {Component} from 'react';
import Filter from '../../Components/Filter/Filter';
import MovieCard from '../../Components/MovieCard/MovieCard'
import { connect } from 'react-redux';
import './CardContainer.scss'
import ShowMore from 'react-show-more';

class CardContainer extends Component {

  constructor(props) {
    super(props);
  }

  favoriteMovie = (movie) => {
    console.log(movie)
    const url = 'http://localhost:3000/api/users/favorites/new'
  }

  displayCards = () => {
    return this.props.movies.map(movie => 
      <div key={movie.id} className='movie-card'>
        <div className='movie-title'>
          <p>{movie.vote_average}</p>
          <h4>{movie.title}</h4>
          <p>{movie.release_date}</p>
        </div>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='img poster' className='movie-poster'/>
        <div className='movie-overview'>
          <ShowMore lines={6}>{movie.overview}</ShowMore>
          <button onClick={() => this.favoriteMovie(movie)}>Favorite</button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Filter/>
        <div className='card-container'>
          {this.displayCards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  movies: state.movies
})

export default connect(mapStateToProps)(CardContainer);