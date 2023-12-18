import io from 'socket.io-client';

const URI = process.env.REACT_APP_URI_SOCKET || '';
const PATH = process.env.REACT_APP_PATH || '';

const socket = (uri: string = URI, path: string = PATH) => io(uri, { path });

export { socket };
