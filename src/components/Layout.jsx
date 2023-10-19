import styled from 'styled-components';

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
  b {
    text-align: center;
    font-size: 30px;
    color: ${({ theme }) => theme.colors.red};
  }
`;
