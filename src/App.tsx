import React from 'react';
import { Layout } from './comoponents/common/layout'
import Routes from './routes/routes'
import FavoriteArtistsContext from './FavoriteArtistsContext'

function App() {

  const [favoriteArtitsts, setFavoriteArtists] = React.useState([])

  const handleRemoveFromFavorites = (artistToBeRemoved: any) => {
    setFavoriteArtists(
      favoriteArtitsts.filter((artist: any) => artist.id !== artistToBeRemoved.id)
      )
  }

  return (
    <FavoriteArtistsContext.Provider value={{favoriteArtitsts, setFavoriteArtists, handleRemoveFromFavorites}}>
      <Layout>
        <Routes />
      </Layout>
    </FavoriteArtistsContext.Provider>
  );
}

export default App;
