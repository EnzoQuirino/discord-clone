import styled from "styled-components";
import { Props } from ".";

export const Button = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 43px;
    height: 43px;
    border-radius: 50%;

    margin-bottom: 8px;

    background-color: ${(props) =>
        props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    position: relative;
    cursor: pointer;

    > img {
        width: 35px;
        height: 35px;
    }
    
    &::before {
        width: 9px;
        height: 9px;

        position: absolute;
        left: -12px;
        top: calc(50% - 4.5px);

        background-color: var(--white);
        border-radius: 50%;

        content: '';
        display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
    }

    &::after {
        background-color: var(--notification);
        width: auto;
        height: 13px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 11px;
        font-weight: bold;
        color: var(--white);

        content: '${(props) => props.mentions && props.mentions}';
        display: ${(props) =>
        props.mentions && props.mentions > 0 ? 'inline' : 'none'}
    }

    
    transition: border-radius .2s, background-color .2s;

    &.active,
    &:hover {
        border-radius: 16px;
        background-color: ${props => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'}
    }
`;