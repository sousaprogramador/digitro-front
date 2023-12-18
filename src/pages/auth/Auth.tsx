import { Box, Button, TextField, Paper, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../shared/contexts';
import { socket } from '../../shared/utils/socket';
import { CONNECT, NEW_CALL, USER_CONNECT, USER_CONNECTED } from '../../shared/utils/const';
import { ICall } from '../../shared/interface';

export const Auth = () => {
  const navigate = useNavigate();
  const { setUser, user, addNewCall } = useAppContext();

  const handleClickConect = () => {
    const io = socket()

    io.on(CONNECT, () => { io.emit(USER_CONNECT, user); });

    io.on(USER_CONNECTED, (data) => { navigate('/chat'); });

    io.on(NEW_CALL, (data: ICall) => { addNewCall({ ...data, finished: false }) })
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh"
      }}>
      <Paper
        elevation={12}
        sx={{ marginRight: "15%", marginLeft: "15%" }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          flex={1}
          gap={2}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: 5 }}
        >
          <TextField
            label="Usuário"
            placeholder="Usuário"
            name="Usuário"
            value={user.username}
            onChange={(e) => setUser({ username: e.target.value, maxCalls: user.maxCalls })}
            size="small"
          />

          <TextField
            label="Máximo de chamadas"
            placeholder="Máximo de chamadas"
            name="Máximo de chamadas"
            value={user.maxCalls}
            onChange={(e) => setUser({ username: user.username, maxCalls: +e.target.value })}
            size="small"
            defaultValue={1}
          />

          <Button variant="contained" color="info" onClick={handleClickConect}>
            Conectar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
