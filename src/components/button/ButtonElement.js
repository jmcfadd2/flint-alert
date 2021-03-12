import styled from 'styled-components'
import colors from '../../colors'
export const Button = styled.a`
  border-radius: 50px;
  background: ${({primary}) => (primary ? colors.blue : '#010606') };
  white-space: nowrap;
  padding: ${({big}) => ( big ? '14px 48px' : '12px 48px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ big }) => (big ? '14px 48px' : '12px 48px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease-in-out;
    background: ${colors.accent}
  }
`