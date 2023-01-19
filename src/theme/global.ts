import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.text}
  }

  body {
    background-color: ${({ theme }) => theme.background};
  }
`;
