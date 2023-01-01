import './App.css';
import { useEffect, useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import DataRows from './components/dataRows';
import movieService from './services/movies'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    movieService
      .getMovies()
      .then(response => {
        setMovies(response)
      })
  }, [])

  const removeFromMovies = ({movie}) => {
     movieService
        .deleteMovie(movie._id)
        .then(response => {
          if (response) {
            let tempArray = movies
            let index = tempArray.indexOf(movie)
            if (index !== -1) {
              tempArray.splice(index, 1)
              setMovies([...tempArray])
            }
          }
        })
  }

  return(
    <div>
      <h1 className='pageHeader'>Movies</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {movies.map(movie => (
              <TableRow key={movie.id}>
                <TableCell>
                  <DataRows movie = {movie}/>
                  <Button> EDIT</Button>
                  <Button
                    onClick={() => {
                      removeFromMovies({movie})
                    }}
                  > DELETE</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div> 
  )
}

export default App;
