import React from 'react'
import Link from 'gatsby-link'
import FA from 'react-fontawesome'
import { Container } from 'react-responsive-grid'

import 'font-awesome/css/font-awesome.css'
import './global.css'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(2),
            marginBottom: rhythm(2),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Tracked
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            marginBottom: rhythm(2),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <FA name="arrow-left" />
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          background: '#eee',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          transform: 'translateY(10vh)'
        }}
      >
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
