import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import img from '../../../assets/img/call.png';
import { useAppContext } from '../../contexts';
import { ICall } from '../../interface';

const CustomComponent: React.FC<ICall> = (currentCall) => {
  const { setCall, setCalls, calls, call, addNewAndRemoveCall } = useAppContext();
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleAccept = () => {
    // check if there is a call in progress
    if (Object.values(call).length) {
      addNewAndRemoveCall(call.callId, call.time)
    }

    setCall(currentCall);
    handleStart();
  };

  const handleClickDetails = () => {
    setCall(currentCall)
  };

  const handleReject = () => {
    const newCalls = calls.filter((c) => c.callId !== currentCall.callId);
    setCalls(newCalls);
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const formatTimePart = (timePart: number) => timePart.toString().padStart(2, '0');

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  useEffect(() => {
    if (!call.finished && call.callId === currentCall.callId) {
      setCall({ ...call, time: `${formatTimePart(minutes)}:${formatTimePart(seconds)}` })
    }
  }, [time])

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      <CardMedia
        component="img"
        height="80"
        width="40"
        image={img}
        alt="Imagem"
        style={{ objectFit: 'contain' }}
      />
      <CardContent style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Typography variant="h5" component="div" style={{ padding: 10, width: '150px', textAlign: 'center' }}>
          {currentCall.caller || '-'}
        </Typography>
        {!currentCall.finished && (
          <>
            {isActive && (
              <Button variant="text" style={{ margin: '10px', paddingRight: "40px", paddingLeft: "80px" }}>
                {`${formatTimePart(minutes)}:${formatTimePart(seconds)}`}
              </Button>)}
            {!isActive && (
              <>
                <Button variant="contained" onClick={handleAccept} style={{ margin: '10px' }}>
                  Atender
                </Button>
                <Button variant="contained" color="error" onClick={handleReject} style={{ margin: '10px' }}>
                  Recusar
                </Button>
              </>
            )}
          </>
        )}
        {currentCall.finished && (
          <Button variant="contained" onClick={handleClickDetails} style={{ margin: '10px' }}>
            Detalhes
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export { CustomComponent };
