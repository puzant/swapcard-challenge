import { gql } from '@apollo/client'

export const GET_ARTIST = gql`
  query($artistId: MBID!) {
    lookup {
      artist(mbid: $artistId) {
        id
        name
        country
        type
        releases {
          edges {
            node {
              id
              title
              coverArtArchive {
                front
                back
              }
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_ARTISTS = gql`
query($artistName: String!) {
  search {
    artists(query: $artistName) {
      nodes {
        id
        mbid
        name
        country
        fanArt {
          thumbnails {
            imageID
            url
            likeCount
          }
        }
      }
    }
  }
}
`;