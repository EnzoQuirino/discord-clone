import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from "../ChannelMessage";


const ChannelData: React.FC = () => {
    const messagesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            const div = messagesRef.current;
            if (div) {
                div.scrollTop = div.scrollHeight;
            }
        }, 0);
    }, []);


    return (
        <Container>
            <Messages>
                {Array.from(Array(10).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Enzo Quirino"
                        date="10/08/2024"
                        content="Finally my birthday is coming!"
                    />
                ))}

                <ChannelMessage 
                    author= "Enzo Quirino"
                    date= "11/08/2024"
                    content="Today is my birthday! :D"
                />

                <ChannelMessage 
                    author= "Music Bot"
                    date= "11/08/2024"
                    content="Now Playing: Kendrick Lamar - Not Like Us"
                    isBot = {true}
                />

                <ChannelMessage 
                    author= "Music Bot"
                    date= "11/08/2024"
                    content={
                        <>
                            Happy Birthday <Mention>@Enzo Quirino</Mention>
                        </>
                    }
                    isBot = {true}
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder= "Chat in #react-training"/>
                <InputIcon />
            </InputWrapper>

        </Container>
    );
};

export default ChannelData