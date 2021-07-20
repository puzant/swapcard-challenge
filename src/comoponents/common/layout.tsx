import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { BrowserRouter as Router, Link} from 'react-router-dom';

import { Block } from './block'
import { Sidebar } from './sidebar'

interface LayoutProps {
  children: ReactElement | ReactElement[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Root>
      <Block layout='horizontal' gap={15}>
        <Sidebar />
        <Block spreadX>
        <Router>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledLink to="/">
              Home
            </StyledLink>
          </Breadcrumbs>
          {children}
        </Router>
        </Block>
      </Block>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
`

const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #111;
`