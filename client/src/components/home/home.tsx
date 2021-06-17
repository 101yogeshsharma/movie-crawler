import './home.css'

import { Box, Image, Badge, Button } from '@chakra-ui/react';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import axios from 'axios';

import { search_by_id } from '../../actions/searchAction';
import { getNodeMajorVersion } from 'typescript';

export default function Home() {

    const [movies, setMovies] = useState<any>([]);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const history = useHistory();

    const showMovieDetails = (id: any) => {
        const data = { id };
        axios.post('c5/getMovies', data)
            .then((response: any) => {
                if (response.status === 200) {
                    console.log('resposne',response.data.movieList);
                    dispatch(search_by_id([response.data.movieList]));
                    history.push('/movies/' + id);
                }
            })
    }

    const fetchMovies = () => {
        const data = { page };

        axios.post('/c5/listMovies', data)
            .then((response: any) => {
                if (response.status = 200) {
                    setMovies(response.data.movieList);
                }
            })
    }

    useEffect(() => {
        fetchMovies();
    }, [page])

    return (
        <div className="home-main-div">
            <div className="movie-list-div">
                {movies ? movies.map((movie: any, index: any) => {
                    return (

                        <Box m={2} key={index} maxW="200" borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={() => showMovieDetails(movie.imdbID)}>
                            <Image src={movie.Poster} alt="poster not available" />

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
            <div className="pagination-div">
                <Button isDisabled={page === 1 ? true : false} onClick={() => setPage(page - 1)}>Previous</Button>
                <Button onClick={() => setPage(page + 1)}>Next</Button>
            </div>
        </div>
    )
}