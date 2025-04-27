import React from "react";

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Text channels</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="react-training"/>
            <ChannelButton channelName="js-dom-manipulation"/>
            <ChannelButton channelName="project-status"/>
            <ChannelButton channelName="music-to-chill"/>
            <ChannelButton channelName="afk"/>




        </Container>
    );
};

export default ChannelList;