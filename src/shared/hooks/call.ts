import { useState } from 'react';
import { ICall } from '../interface';

export function useCall() {
    const [call, setCall] = useState<ICall>({} as ICall);

    return { call, setCall };
}