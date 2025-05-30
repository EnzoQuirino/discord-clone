import styled from "styled-components";
import { AlternateEmail } from "styled-icons/material";

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary);


  @media (max-width: 763px) {
    grid-column-start: 3; 
    grid-column-end: 6;   
  }
`;

  
export const Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;


export const InputWrapper = styled.div`
  width: 100%;

  padding: 0 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);

  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
  
  @media (max-width: 435px) {
    padding: 0 8px 0 40px;
  }

  @media (max-width: 390x) {
    padding: 0 5px 0 20px;
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;

  color: var(--gray);

  @media (max-width: 435px) {
    width: 20px;
    height: 20px;
    }
`;