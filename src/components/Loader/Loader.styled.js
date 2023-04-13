import styled from 'styled-components';

export const MiniLoaderOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: transparent;
`;

export const MainLoaderOverlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.darkBgColor};
`;
