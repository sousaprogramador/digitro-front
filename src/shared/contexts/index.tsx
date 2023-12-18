import { createContext, useContext } from 'react';
import { useCalls, useUser } from '../hooks';
import { IApp, ICall } from '../interface';
import { useCall } from '../hooks/call';

export const AppContext = createContext({} as IApp)

type AppProviderProps = { children: React.ReactNode; };

export const AppProvider = ({ children }: AppProviderProps) => {
  const { user, setUser } = useUser(), { calls, setCalls } = useCalls(), { call, setCall } = useCall();

  const addNewCall = (data: ICall) => {
    setCalls((previus) => [...previus, data])
  }

  const addNewAndRemoveCall = (callId: string, time: string) => {
    const callForUpdate = calls.find(c => c.callId === callId);

    if (callForUpdate) setCalls((previus) => [...previus?.filter(c => c.callId !== callId), { ...callForUpdate, time, finished: true }]);
  }

  return (
    <AppContext.Provider value={{ user, setUser, calls, setCalls, addNewCall, call, setCall, addNewAndRemoveCall }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);
