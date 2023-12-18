import { useState } from 'react';
import { ICall } from '../interface';

export function useCalls() {
    const [calls, setCalls] = useState<ICall[]>([] as ICall[]);

    return { calls, setCalls };
}