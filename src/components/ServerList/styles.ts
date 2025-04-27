import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  max-height: 100vh;
  overflow-y: auto;

  /* Firefox */
  scrollbar-width: none;

  /* IE 10+ */
  -ms-overflow-style: none;

  /* Webkit (Chrome, Safari, Edge Chromium) */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
`;

export const Separator = styled.div`
  width: 32px;
  border-bottom: 2px solid var(--quaternary);

  margin-bottom: 8px;
`;