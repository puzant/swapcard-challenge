import React from 'react'
import styled from 'styled-components'
import { Block } from './common/block'

export const Album = ({ album }: any) => {

  return (
    <Root>
    {album?.node.coverArtArchive.front ?
      <BandPoster src={album?.node.coverArtArchive.front} alt="" /> : 
      <BandPoster src="https://www.theatromarrakech.com/wp-content/plugins/urvenue-plugin/images/placeholder.artist.jpg" alt="" />
    }
    
    <Block>
      <AlbumInfo>{album.node.title}</AlbumInfo>
    </Block>
  </Root>
  )
}

const Root = styled.div`
  background: #fff;
  transform-origin: top left;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.96);
  border-radius: 5px;
  margin-top: 20px;
  height: 260px;
  padding: 13px;
  transition: .5s;
  &:hover {
    cursor: pointer;
    background-color: #ebe7e7;
  }
`

const AlbumInfo = styled.div`
  margin-top: 4px;
  font-weight: bold;
  width: 160px; 
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
`

const BandPoster = styled.img`
  width: 200px;
  height: 240px;
`