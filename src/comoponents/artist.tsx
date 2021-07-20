import React from 'react'
import styled from 'styled-components'
import { Block } from './common/block'
import FavoriteIcon from '@material-ui/icons/Favorite';


export const Artist = ({ artist }: any) => (
  <Root>

    {artist?.fanArt.thumbnails[0] ?
      <BandPoster src={artist?.fanArt.thumbnails[0].url} alt="" /> :
      <BandPoster src="https://www.theatromarrakech.com/wp-content/plugins/urvenue-plugin/images/placeholder.artist.jpg" alt="" />
    }
    
    <Block>
      <ArtistInfo>{artist.name}</ArtistInfo>
      <ArtistInfo>Location: {artist.country}</ArtistInfo>
    </Block>

  </Root>
)

const Root = styled.div`
  background: #fff;
  transform-origin: top left;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.96);
  border-radius: 5px;
  margin-top: 20px;
  width: auto;
  height: 260px;
  padding: 13px;
  transition: .5s;
  &:hover {
    cursor: pointer;
    background-color: #ebe7e7;
  }
`

const ArtistInfo = styled.div`
  margin-top: 4px;
  font-weight: bold;
  width: 160px; 
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
`

const BandPoster = styled.img`
  width: 200px;
`