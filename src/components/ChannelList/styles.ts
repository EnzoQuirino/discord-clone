import styled from "styled-components";
import { Add } from 'styled-icons/material';


export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
  }
    
  @media (max-width: 763px) {
    > span {
      font-size: 10px; /* Diminui o tamanho da fonte */
    }
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;

  color: var(--symbol);
  cursor: pointer;

  /* Media Query para telas menores que 763px */
  @media (max-width: 763px) {
    width: 18px;  /* Diminui o tamanho do ícone */
    height: 18px;
  }
`;
