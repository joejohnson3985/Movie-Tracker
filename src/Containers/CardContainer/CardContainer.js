import React, {Component} from 'react';
import Filter from '../../Components/Filter/Filter';
import MovieCard from '../../Components/MovieCard/MovieCard'
import { connect } from 'react-redux';
import './CardContainer.scss'
import { favoriteMovieData } from '../../APICalls/APICalls';
import { cleanForFavorite } from '../../Utilities/Cleaners.js';
import { nextPage } from '../../Actions'


class CardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: false
    }
  }

  favoriteMovie = (movie) => {
    let id = this.props.user.id
    const cleanedMovie = cleanForFavorite(movie, id)
    const url = 'http://localhost:3000/api/users/favorites/new'
    const userOptionObject = {
      method: 'POST',
      body: JSON.stringify(cleanedMovie),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try{
      favoriteMovieData(url, userOptionObject)
      console.log('favorited')
    } catch(error) {
      console.log('unable to favorite')
    }
  }


  displayCards = () => {
    if(!this.state.favorites) {
      return this.props.movies.map(movie => <MovieCard {...movie} favoriteMovie = {this.favoriteMovie} key={movie.id}/>)
    } else {
      return this.props.favorites.map(movie => <MovieCard {...movie} key={movie.id}/>)
    }
  }

  toggleSource = () => {
    this.setState({
      favorites: !this.state.favorites
    })
  }

  newPage = () =>{
    let value = this.props.page;
    this.props.nextPage(this.props.page)
    this.props.fetchCallFun(value+=1)
    window.scrollTo(0, 0);

  }

  render() {
    return (
      <div>
        <Filter toggleSource={this.toggleSource}/>
        <button className="next-page" onClick={() => this.newPage()}> Next Page </button>
        <div className='card-container'>
          {this.displayCards()}
        </div>
        <button className="next-page" onClick={() => this.newPage()}> Next Page </button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  user: state.currentUser,
  movies: state.movies,
  page: state.page,
  favorites: state.favorites
})
const mapDispatchToProps = (dispatch) =>({
  nextPage: (value) => dispatch(nextPage(value)),
  // previousPage: (value) => dispatch(previousPage(value))
})



export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);