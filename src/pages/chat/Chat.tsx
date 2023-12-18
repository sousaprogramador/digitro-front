import { Box } from '@mui/material';
import { ChatDetail } from '../../shared/components/chatDetail';
import { ChatService } from '../../shared/components/chatService';
import { Header } from '../../shared/components/header';
import { useAppContext } from '../../shared/contexts';

export const Chat = () => {
  const { user, calls, call } = useAppContext();

  return (
    <Box>
      <Header userName={user.username} />

      <Box flexDirection="row" display={'flex'}>
        <Box display={'flex'}>
          <ChatService calls={calls} />
        </Box>

        <Box display="contents">
          <ChatDetail {...call} />
        </Box>
      </Box>
    </Box>
  );
};
