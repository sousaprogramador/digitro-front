import { Box, Typography } from "@mui/material";
import { CustomComponent as Card } from "../card";
import { ICall } from "../../interface";

export const ChatService = ({ calls }: { calls: ICall[] }) => {
  return (
    <Box width={'38vw'} padding={2}>
      <Typography variant="h4" gutterBottom>
        Atendimentos
      </Typography>

      <Box width={"100%"}>
        {calls.map((call: ICall) => <Card key={call.callId} {...call} finished={call.finished} />)}
      </Box>
    </Box>
  );
};
