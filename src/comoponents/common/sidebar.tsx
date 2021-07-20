import React, { useContext } from 'react'
import styled from 'styled-components'

import { Typography } from '@material-ui/core';
import FavoriteArtistsContext from '../../FavoriteArtistsContext';

export const Sidebar = () => {

  const {favoriteArtitsts} = useContext(FavoriteArtistsContext)

  return (
    <Root>
      <Typography variant='h5'>Favorite Artists</Typography>
      <NavMenu>
        {favoriteArtitsts?.map((artist: any, index: number) => (
          <NavItem key={index}>
            {artist.name}
          </NavItem>
        ))}
      </NavMenu>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 300px;
  gap: 10px;
  border-right: 1px solid #E6EAEA;
`

const NavMenu = styled.div`
`

const NavItem = styled.div`
  display: block;
  padding: 1rem;
  font-size: 17px;
  font-weight: 300;
  color: #111;
  cursor: pointer;
  border-bottom: 1px solid #E6EAEA;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    background: #4bc3c9;
    color: #fff;
  }
  &:last-of-type {
    border-bottom: none;
  }
`