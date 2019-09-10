import React from 'react'
import styled, { css } from 'styled-components'

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 180px 100px;
`

const ControlButtonElem = styled.div`
  cusour: pointer;
  ${props => props.actice && css`
    color: blue
  `}
`

const ControlButton = ({ name, active }) => (
  <ControlButtonElem active={active}>
    {name}
  </ControlButtonElem>
)


const AppBar = () => (
  <Bar>
    <Logo> CryptoDash </Logo>
    <div />
    <ControlButton active name='dashboard'/>
    <ControlButton name='setting'/>
  </Bar>
)

export default AppBar