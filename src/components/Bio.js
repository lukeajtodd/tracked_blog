import React from 'react'
import FA from 'react-fontawesome'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        {/* <img
          src={profilePic}
          alt={`Luke Todd`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        /> */}
        <p>
          Written by <a href="https://twitter.com/lukeajtodd"><strong>Luke Todd</strong></a> living and working in Sheffield.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
