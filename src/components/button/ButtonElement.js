import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ? '#01bf71' : '#010606') };
  white-space: nowrap;
  padding: ${({big}) => ( big ? '14px 48px' : '12px 48px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ big }) => (big ? '14px 48px' : '12px 48px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary? '#fff' : '#01bf71') 
  }
`