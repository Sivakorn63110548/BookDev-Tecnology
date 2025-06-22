import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChatbotPage from "@/components/AI/chat_message";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ChatBot Page",
};

const ChatBot = () => {
  return (
    <>
      <Breadcrumb pageName="AI ChatBot" />

      <ChatbotPage />
    </>
  );
};

export default ChatBot;
