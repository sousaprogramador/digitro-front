import { Box, Button } from '@mui/material';
import moment from 'moment';
import { ICall } from '../../interface';
import { useAppContext } from '../../contexts';

export const ChatDetail = ({
  callId,
  media,
  startDate,
  service,
  caller,
  time
}: ICall) => {
  const { setCall, addNewAndRemoveCall } = useAppContext();

  const handleClickFinish = () => {
    addNewAndRemoveCall(callId, time)

    setCall({} as ICall)
  }

  return (
    <Box
      width={'75%'}
      margin={2}
      padding={2}
      bgcolor="#f7f7f9"
      flexDirection="column"
      borderRadius={2}
    >
      <Box flexDirection="column">
        <Box>Chamada selecionada: {caller}</Box>

        <Box>CallId: {callId}</Box>
        <Box>Mídia: {media}</Box>
        <Box>
          Data inicial: {moment(startDate).format('DD/MM/YYYY HH:mm:ss')}
        </Box>
        <Box>Serviço: {service}</Box>
        <Box>Origem: {origin}</Box>
        <Box>Tempo: {time}</Box>
      </Box>
      <Box display="flex" justifyContent="end" marginTop={10}>
        <Button variant="contained" color="error" onClick={handleClickFinish}>
          Finalizar
        </Button>
      </Box>
    </Box>
  );
};
