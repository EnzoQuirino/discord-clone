import React from "react";
import Logo from '../../assets/logo.svg'
import { Button } from './styles'

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotifications?: boolean;
    mentions ?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotifications,
    mentions,
}) => {
    return (
        <Button
            isHome = {isHome}
            hasNotifications = {hasNotifications}
            mentions={mentions}
            className={selected ? 'active' : ''}
        >
            {isHome && <img src={Logo} alt = "Strawhat"/>}
        </Button>
    );
};

export default ServerButton;