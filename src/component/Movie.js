import React from 'react';
import PropTypes from 'prop-types'; // 라이브러리


// 멍청한 함수 만듬 리턴하지 못하고 렌더도 없음
function Movie({title,poster,genres,synopsis}) {
	return(
		<div>
			<h1>{title}</h1>
			<div>
			
			<MoviePoster poster={poster} title={title}/>	
			</div>
			<div>
				{genres.map((genre,index) => <MovieGenres genre={genre} key={index} />)}
			</div>
			<div>{synopsis}</div>
		</div>
	)
}

// 멍청한 함수 만듬 리턴하지 못하고 렌더도 없음
// alt 는 가져온적이 없는데 이걸 넣어야 하는지
// 여기 agrument 에서 지정한것은 위의 movie 함수의 MoviePoster 의 title={title} 에서 정의 했으므로 사용할수 있다
function MoviePoster({poster,title}) {
	return(
			<img src={poster} alt={title} title={title} className="MOvie__Poster" />
	)
}


function MovieGenres({genre}) {
	return(
		<span>{genre}</span>
	)
}
  /********************************************* 
   * genres 는 array 인데 그것도 모르고 계속 스트링으로 받아서 에러 계속 남
  *********************************************/	
Movie.propTypes = {
	title : PropTypes.string.isRequired,
	poster : PropTypes.string.isRequired,
	genres : PropTypes.array.isRequired,
	synopsis : PropTypes.string.isRequired
}

// Movie.propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.array.isRequired,
//     synopsis: PropTypes.string.isRequired
// }

MoviePoster.propTypes = {
	poster : PropTypes.string.isRequired
}	

MovieGenres.propTypes = {
	genre : PropTypes.string.isRequired
}



export default Movie;