import React from "react"
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = () => (
  <Root>
    <CircularProgress color="secondary" />
  </Root>
)

const Root = styled.div`
  margin: auto;
`