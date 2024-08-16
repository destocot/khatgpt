type PageProps = { params: { chatId: string } };

export default function ChatIDPage({ params }: PageProps) {
  const chatId = params.chatId;

  return <div>Chat ID: {chatId}</div>;
}
