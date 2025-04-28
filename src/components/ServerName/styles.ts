import styled from "styled-components";
import { ExpandMore } from 'styled-icons/material';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;
  background-color: var(--secondary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

  @media (max-width: 763px) {
    padding: 0 8px 0 10px;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;

  color: var(--white);

  @media (max-width: 763px) {
    font-size: 13px; /* Diminui o tamanho da fonte */
  }
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: var(--white);
  cursor: pointer;
`;