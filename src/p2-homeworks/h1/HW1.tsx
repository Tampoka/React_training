import React from 'react'
import Message, {MessageTypeProps} from "./Message";
import SenseiMessage from "./SenseiMessage";

const messageData: MessageTypeProps = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Ольга',
    message: 'Моя первая домашка...',
    time: '22:00',
}

function HW1() {
    return (
        <div style={{backgroundColor: "black"}}>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            {/*  <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}

            <hr/>
            <SenseiMessage
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}/>
            <hr/>

        </div>
    )
}
export default HW1
