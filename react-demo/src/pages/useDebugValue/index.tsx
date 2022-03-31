import React, { useDebugValue, useEffect, useState } from 'react'

const useDelayedMessage = (msg: string, delay: number) => {
    const [message, setMessage] = useState<string>("");
    useEffect(() => {
      setTimeout(() => {
        setMessage(msg);
      }, delay);
    });
    useDebugValue(message ? "Message Set" : "Message not set");
    return message;
  };

export default function UseDebugValueDemo() {
    const delayedMessage = useDelayedMessage("foo", 1000);
    return <div>{delayedMessage}</div>
}