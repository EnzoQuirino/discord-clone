import styled from "styled-components";
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

  /* Media Query para telas menores que 768px */
  @media (max-width: 768px) {
    padding: 6px; /* Reduzi o padding */
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 28px; /* Reduzi o tamanho do avatar */
  height: 28px;
  border-radius: 50%;
  background-color: var(--gray);

  /* Ajuste para telas pequenas */
  @media (max-width: 768px) {
    width: 24px; /* Avatar ainda menor em telas pequenas */
    height: 24px;
  }
`;

export const UserData = styled.div`
  margin-left: 6px; /* Diminui o espaçamento */
  display: flex;
  flex-direction: column;

  > strong {
    color: var(--white);
    font-size: 11px; /* Reduzi o tamanho do nome */
    display: block;

    /* Ajuste do nome em telas pequenas */
    @media (max-width: 768px) {
      font-size: 9px; /* Font ainda menor em telas pequenas */
    }
  }

  > span {
    color: var(--gray);
    font-size: 11px; /* Reduzi o tamanho do código */

    /* Ajuste do código em telas pequenas */
    @media (max-width: 768px) {
      font-size: 9px; /* Font ainda menor em telas pequenas */
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  > svg:not(:first-child) {
    margin-left: 5px; /* Diminui o espaço entre os ícones */
  }

  /* Ajuste para ícones em telas pequenas */
  @media (max-width: 768px) {
    > svg {
      width: 14px; /* Ícones ainda menores em telas pequenas */
      height: 14px;
    }
  }
`;

export const MicIcon = styled(Mic)`
  width: 18px; /* Reduzi o tamanho do ícone do microfone */
  height: 18px;

  color: var(--white);
  opacity: .7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  /* Ajuste do ícone do microfone em telas pequenas */
  @media (max-width: 763px) {
    width: 14px;
    height: 14px;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 18px; /* Reduzi o tamanho do ícone de fones de ouvido */
  height: 18px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  /* Ajuste do ícone de fones de ouvido em telas pequenas */
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 18px; /* Reduzi o tamanho do ícone de configurações */
  height: 18px;

  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  /* Ajuste do ícone de configurações em telas pequenas */
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;
