import styled from "styled-components";

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UL - User List
// UI - User Info


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 71px 240px auto 240px; // Desktop: 4 colunas (incluindo UL)
  grid-template-rows: 46px auto 52px;
  grid-template-areas: 
    'SL SN CI CI'
    'SL CL CD UL'  // Desktop: UL visível
    'SL UI CD UL'; // Desktop: UI visível
  height: 100%;
  overflow-x: hidden;

  @media (max-width: 763px) {
    grid-template-columns: 50px 130px auto; // Mobile: remove a coluna do UL (240px)
    grid-template-areas: 
      'SL SN CI'
      'SL CL CD'  // Mobile: UL some, CD ocupa seu espaço
      'SL UI CD'; // Mobile: UI continua visível
  }
`;