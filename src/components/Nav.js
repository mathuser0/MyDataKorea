import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = props => (
  <nav id="nav" className={props.sticky ? 'alt' : ''}>
    <Scrollspy
      items={['intro', 'first', 'second', 'cta']}
      currentClassName="is-active"
      offset={-300}
    >
      <li>
        <Scroll type="id" element="intro">
          <a href="#">MyData 선언문</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="first">
          <a href="#">MyData에 관하여</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="second">
          <a href="#">MyData 블로그</a>
        </Scroll>
      </li>
      <li>
        <Scroll type="id" element="cta">
          <a href="#">MyData 회원등록</a>
        </Scroll>
      </li>
    </Scrollspy>
  </nav>
)

export default Nav
