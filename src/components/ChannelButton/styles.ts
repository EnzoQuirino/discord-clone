import styled from "styled-components";
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 8px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  }

  /* Media Query para telas menores que 763px */
  @media (max-width: 763px) {
    padding: 6px 2px; /* Diminui o padding para ajustar o layout */

    > div span {
      font-size: 9px; /* Diminui o tamanho da fonte */
    }
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);

  /* Ajuste para telas menores que 763px */
  @media (max-width: 763px) {
    width: 16px; /* Diminui o tamanho do ícone */
    height: 16px;
  }
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  /* Ajuste para telas menores que 763px */
  @media (max-width: 763px) {
    width: 14px; /* Diminui o tamanho do ícone */
    height: 14px;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }

  /* Ajuste para telas menores que 763px */
  @media (max-width: 763px) {
    width: 14px; /* Diminui o tamanho do ícone */
    height: 14px;
  }
`;
