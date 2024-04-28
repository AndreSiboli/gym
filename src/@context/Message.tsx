"use client";

import { ReactNode, createContext, useRef, useState } from "react";
import Message from "@/app/components/utils/Message";

interface Context {
  message: { title: string; text: string };
  changeMessage: (data: { title: string; text: string }) => void;
}

export const MessageContext = createContext({} as Context);

export function MessageProvider({ children }: { children: ReactNode }) {
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const refs = useRef<NodeJS.Timeout>();
  const [message, setMessage] = useState({
    title: "",
    text: "",
  });

  function changeMessage(data: { title: string; text: string }) {
    setMessage({ title: "", text: "" });
    setTimeout(() => {
      setMessage(data);
    }, 200);

    if (refs.current) clearTimeout(refs.current);

    refs.current = setTimeout(() => {
      setMessage({ title: "", text: "" });
    }, 5000);
  }

  return (
    <MessageContext.Provider value={{ changeMessage, message }}>
      {children}
      <Message data={message} />
    </MessageContext.Provider>
  );
}
