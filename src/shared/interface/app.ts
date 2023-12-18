import { ICall } from "./call";
import { IUser } from "./user";

export interface IApp {
    user: IUser,
    calls: ICall[],
    call: ICall,
    setUser: (user: IUser) => void
    setCalls: (calls: ICall[]) => void
    addNewCall: (calls: ICall) => void
    setCall: (calls: ICall) => void
    addNewAndRemoveCall: (id: string, time: string) => void
}