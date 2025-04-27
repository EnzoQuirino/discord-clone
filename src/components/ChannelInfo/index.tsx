import React from 'react';

import { Container, HashtagIcon, Separator, Title, Description } from './styles';

const ChannelInfo: React.FC = () => {
    return(
        <Container>
            <HashtagIcon />

            <Title>general-chat</Title>

            <Separator />

            <Description>Here you found the general chat</Description>
        </Container>
    );
};

export default ChannelInfo;