import styled from 'styled-components';

export const MiniLoaderOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 999;
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
