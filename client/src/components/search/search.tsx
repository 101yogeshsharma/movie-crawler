import { Box, Image, Badge, Text, Heading } from '@chakra-ui/react'

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';

import { search_by_id } from '../../actions/searchAction';

import './search.css';

export default function Search() {


    const movies = useSelector((state: any) => state.search);
    const dispatch = useDispatch();
    const history = useHistory();

    const showMovieDetails = (id:any) => {
        const data = { id };
        axios.post('/c5/getMovies', data)
            .then((response: any) => {
                if (response.status === 200) {
                    console.log('movie', response.data.movieList);
                    dispatch(search_by_id([response.data.movieList]));
                    history.push('/movies/' + id);
                }
            })
    }


    return (
        <div className="search-main-div">
            <Heading size="md" mb={3}>{movies.length} Result Found </Heading>
            <div className="search-result-div">
                {movies ? movies.map((movie: any, index: any) => {
                    return (

                        <Box m={2} key={index} maxW="200" borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={() => showMovieDetails(movie.imdbID)}>
                            {console.log(movie.Poster)}
                            <Image size="sm" src={movie.Poster} alt="poster not available" />

                            <Box p="6">
                                <Box d="flex" alignItems="baseline">
                                    <Badge borderRadius="full" px="2" colorScheme="teal">
                                        New
                                    </Badge>
                                    <Box
                                        color="gray.500"
                                        fontWeight="semibold"
                                        letterSpacing="wide"
                                        fontSize="xs"
                                        textTransform="uppercase"
                                        ml="2"
                                    >
                                        {movie.Runtime} &bull; {movie.Year}
                                    </Box>
                                </Box>

                                <Box
                                    mt="1"
                                    fontWeight="semibold"
                                    as="h4"
                                    lineHeight="tight"
                                    isTruncated
                                >
                                    {movie.Title}
                                </Box>

                                <Box>
                                    {movie.BoxOffice}
                                    <Box as="span" color="gray.600" fontSize="sm">
                                        / wk
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )
                }) : <p>No MOvies Found</p>
                }
            </div>
        </div>
    )
}