import React, { Component } from 'react';
import Movie from './component/Movie';

import './App.css';

class App extends Component {
  state = {};

  // componentWillMount -> render -> componentDidMount 순서알아두길
  componentDidMount() {
    this._getMovies();
  }

  // 최신자바스크립트 문법 map() function 을 이용해서 데이터를 sort 한다
  _renderMovies = () => {
    
    const movies = this.state.movies.map(movie => {
      console.log(movies);  
      return (
        <Movie 
          title={movie.title} 
          poster={movie.medium_cover_image} 
          key={movie.id} 
          genres ={movie.genres}
          synopsis = {movie.synopsis}
        />
      )
    })
    return movies;
  };

  // async, await 를 활영해서 데이터를 불러옴
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }
  /********************************************* 
   * fetch 하고 return 하는 것때문에 시간 엄청 버림
  *********************************************/
  _callApi = () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
    )
    .then(response => response.json())
    .then(json => json.data.movies) // fetch 해서 가져온 모든 json data
    .catch(err => console.log(err)) // err 가 있으면 err를 console.log 로 출력
  }
  render() {
    const {movies} = this.state;
    return (
      <div className={movies?'App':'App--Loading'}>
        {movies ? this._renderMovies():'Loading'}
      </div>
    );
  }
}

export default App;
