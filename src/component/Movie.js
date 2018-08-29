import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 라이브러리

class Movie extends Component {

	static propTypes = {
		title : PropTypes.string.isRequired,
		poster : PropTypes.string.isRequired
	}

	render() {
		console.log(this.props);
		return(
			
			<div>
			<h1>hello{this.props.title}</h1>
			<MoviePoster poster={this.props.poster} />	
			</div>
		)
	}
}


class MoviePoster extends Component {

	static propTypes = {
		poster : PropTypes.string.isRequired
	}
	
	render() {
		return(
			<div>
				<img src={this.props.poster} />
			</div>
		)
	}
}


export default Movie;