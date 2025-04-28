import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;
  background-color: var(--primary);

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;


  @media (max-width: 763px) {
    grid-column-start: 3; /* Começa a partir da segunda coluna */
    grid-column-end: 6;   /* Vai até a sexta coluna (final do grid) */
  }
`;
export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;

  color: var(--symbol);

  @media (max-width: 435px) {
    width: 25px;
    height: 25px; 
    }
`;

export const Title = styled.h1`
  margin-left: 9px;

  font-size: 16px;
  font-weight: bold;

  color: var(--white);

  @media (max-width: 435px) {
    font-size: 16px;
    margin-left: 9px
    }
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;

  background-color: var(--white);
  opacity: 0.2;

  margin: 0 13px;

  @media (max-width: 435px) {
    height: 0px; 
    }
`;

export const Description = styled.span`
  font-size: 15px;
  color: var(--gray);

  @media (max-width: 435px) {
    font-size: 0px; 
    }
`;