export type Call = {
  callId: string;
  media: string;
  startDate: Date;
  service: string;
  caller: string;
};

export type ChatServiceProps = {
  calls: Call[];
};
