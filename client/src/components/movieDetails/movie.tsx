import './movie.css';

import { Image, Heading, Text } from '@chakra-ui/react';

import { useSelector } from 'react-redux';

export default function Movie() {

    const movies = useSelector((state: any) => state.search);
    console.log('movies', movies);
    const movie = movies[0];
    console.log(movies);

    return (
        <div className="movie-main-div">
            <div className="movie-info">
                <Image className="movie-poster" src={movie.Poster} />
            </div>

            <div className="movie-extras">
                <div className="movie-title">
                    <Heading size="2xl">{movie.Title}</Heading>
                </div>
                <div className="movie-details">
                    <Heading mt={5} size="md">Year:</Heading>
                    <Text ml={10} size="2xl">{movie.Year}</Text>
                </div>


            </div>
        </div>
    )
}