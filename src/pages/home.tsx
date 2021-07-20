import React from 'react'
import styled from 'styled-components'

import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { useDebounce } from '../hooks/useDebounce'

import { SEARCH_ARTISTS } from '../queries/queries'

import { Block, BlockGroup } from '../comoponents/common/block'
import { Artist } from '../comoponents/artist';
import { Loading } from '../comoponents/loading';

import { Typography } from '@material-ui/core';

export const Home = () => {

  const SEARCH_DEBOUNCE_TIMEOUT = 1000;
  const [artistName, setArtistName] = React.useState<string>("")
  const debounceSearch = useDebounce(artistName, SEARCH_DEBOUNCE_TIMEOUT);

  const {loading, error, data} = useQuery(SEARCH_ARTISTS, {
    variables: { artistName: debounceSearch }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArtistName(e.target.value)
  }

  return (
    <Root gap={20}>

      <BlockGroup layout='vertical' gap={10}>
        <Typography variant='h5'>Search For Artists</Typography>
        <Block layout='horizontal' align='center' gap={10}>
          <SearchInput 
            value={artistName}
            onChange={handleChange}
            placeholder="Enter artists name" 
          />
        </Block>
      </BlockGroup>

      <Block layout='horizontal' justify='center' gap={35} wrapped>
        {data?.search.artists.nodes.map((artist: any) => (
          <StyledLink to={`artist-details/${artist.mbid}`} key={artist.id}>
            <Artist
              artist={artist} 
            />
            </StyledLink>
        ))}
      </Block>

      {loading && <Loading />}

      {!artistName.length && 
        <EmptyState>
          <Typography color='primary' variant='h5'>Enter an artist name to search</Typography>
        </EmptyState>
      }
      
    </Root>
  )
}

const Root = styled(BlockGroup)`
  width: 100%;
`

const SearchInput = styled.input`
  width: 40%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`

const StyledLink = styled(Link)`
  color: #111;
  text-decoration: none;
`;

const EmptyState = styled.div`
  text-align: center;
`