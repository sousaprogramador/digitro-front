import { Box, Button } from '@mui/material';
import { HeaderProps } from './header.types';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts';
import './Header.css';

export const Header = ({ userName = 'Sem nome :(' }: HeaderProps) => {
  const { setUser, setCalls } = useAppContext()
  const navigate = useNavigate();

  const handleClickDisconnect = () => {
    navigate('/auth')
    setUser({ username: "", maxCalls: 1 })
    setCalls([])
    window.location.reload();
  };

  return (
    <Box
      height="15vh"
      className="container"
      display="flex"
      padding={2}
      gap={2}
      flex={1}
      alignItems="center"
      flexDirection="row"
    >
      <Box
        className="userName"
        color="white"
        fontSize={20}
        fontFamily="Syne"
        fontWeight={500}
      >
        {userName}
      </Box>

      <Button variant="contained" color="error" onClick={() => handleClickDisconnect()}>
        Desconectar
      </Button>
    </Box>
  );
};
