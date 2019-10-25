import React from 'react'
import MovieIterator from "../MovieIterator/MovieIterator";
import { ClipLoader } from 'react-spinners';

function DisplayMovies(props){
    


    return(
        <div>
            <div>
                {props.loading && !props.errorMessage ? (
                    
                    <ClipLoader
                        sizeUnit={"px"}
                        size={50}
                        color={'white'}
                        loading={props.loading}
                    />
                        
                    
                ) : props.errorMessage ? (
                    <div className="errorMessage">{props.errorMessage}</div>
                ) : (

                    <MovieIterator movies={props.movies}/>
                )}
            </div>
        </div>
    )
}

export default DisplayMovies