import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import './Movie.css';
import axios from 'axios';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


class Movie extends React.Component { //= ({ movie, onClick}) => {
    
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            canGiveRating: true
        }
    }

    onStarClick(nextValue, prevValue, name){
        
        const content = {
            "rating": nextValue
        }

        // can't give rating to the same movie twice, hence canGiveRating
        this.setState({rating: nextValue})
        this.setState({canGiveRating: false})
        console.log("Rating: " + nextValue)


        // put the content in the database
        // it finds the movie in the database with imdbID then places the rating under Rating which is an array.
        axios.put("http://it2810-13.idi.ntnu.no:4000/movies/" + this.props.imdbID, content)
        console.log("http://it2810-13.idi.ntnu.no:4000/movies/" + this.props.imdbID)
    }
    
    render(){
        // display poster, or a placeholder
        const poster =  this.props.movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : this.props.movie.Poster;
        const { rating } = this.state;
        
        // calculates average rating
        const averageRating = arr => parseFloat(arr.reduce((p,c) => p + c, 0) / (arr.length)).toFixed(1); 

        return (
            <div>
            <div className="movie">
                
                <div>
                    <img
                        onClick={() => this.props.onClick(averageRating(this.props.movie.Rating))}
                        alt={`The movie titled: ${this.props.movie.Title}`}
                        src={poster}
                        className="Poster"
                    />
                </div>
                <h4>{this.props.movie.Title}</h4>
                <p>({this.props.movie.Year})</p>



            </div>
            
            <StarRatingComponent
                name={this.props.movie.Title} /* name of the radio input, it is required */
                emptyStarColor="grey"
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
                editing={this.state.canGiveRating}
                
            />
            {!this.state.canGiveRating ? 
                <p>Average rating: {averageRating(this.props.movie.Rating)}</p>
                : null
            }
            <br/>
            <br/>
            <br/>
            
            </div>
        );
    }
};


export default Movie;