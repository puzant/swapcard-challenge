import React, { useContext } from 'react'
import styled from 'styled-components'

import FavoriteArtistsContext from '../FavoriteArtistsContext';

import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_ARTIST } from '../queries/queries'

import { Block } from '../comoponents/common/block'
import { Typography } from '@material-ui/core'
import { Album } from '../comoponents/album'
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';

export const ArtistDetails = () => {

  const {favoriteArtitsts, setFavoriteArtists, handleRemoveFromFavorites} = useContext(FavoriteArtistsContext)

  const [isArtistFavorite, setIsArtistFavorite] = React.useState(null)
  const [openSnackbar, setOpenSnackbar] = React.useState<boolean>(false)
  
  const { artistId } = useParams<{ artistId: string }>();
  
  const {loading, error, data} = useQuery(GET_ARTIST, {
    variables: { artistId: artistId }
  });

  const handleAddToFavorites = () => {
    setFavoriteArtists((prevState: any) => [...prevState, data.lookup.artist])
    setOpenSnackbar(true)
  }

  const onRemoveFromFavorites = () => {
    handleRemoveFromFavorites(data.lookup.artist)
  }

  return (
    <Root>
      <Typography variant='h5'>Artist details</Typography>

      <ArtistInfoContainer layout='vertical' gap={15}>
        <ArtistType>{data?.lookup.artist.type}</ArtistType>
        <ArtistName>{data?.lookup.artist.name}</ArtistName>

        {
          favoriteArtitsts.find((artist: any) => artist.name === data?.lookup.artist.name) ?
            <RemoveFavoriteButton 
              layout='horizontal' 
              justify='center' 
              align='center' 
              gap={10}
              onClick={onRemoveFromFavorites}
            >
              <span>Remove from favorites</span>
            <DeleteIcon />
          </RemoveFavoriteButton> :
          <AddFavoriteButton 
            layout='horizontal' 
            justify='center' 
            align='center' 
            gap={10}
            onClick={handleAddToFavorites}
          >
            <span>Add to favorites</span>
            <FavoriteIcon />
          </AddFavoriteButton>
        }

      </ArtistInfoContainer>

      <Block layout='horizontal' justify='center' gap={25} wrapped>
        {data?.lookup.artist.releases.edges.map((album: any, index: number) => (
          <Album 
            key={index} 
            album={album} 
          />
        ))}
      </Block>

      <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={openSnackbar}
      autoHideDuration={5000}
      onClose={() => setOpenSnackbar(false)}
      message="Added to favorites"
    />

    </Root>
  )
}

const Root = styled.div`
  width: 100%;
`

const ArtistInfoContainer = styled(Block)`
  margin-top: 15px;
`

const ArtistName = styled.div`
  font-size: 2rem;
`

const ArtistType = styled.div`
`

const AddFavoriteButton = styled(Block)`
  color: #fff;
  background-color: #4bc3c9;
  padding: 10px;
  max-width: 150px;
  text-align: center;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`

const RemoveFavoriteButton = styled(Block)`
  color: #fff;
  background-color: #d33f1e;
  padding: 10px;
  width: 210px;
  max-width: 100%;
  text-align: center;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`