import { useState } from 'react';
import { IUser } from '../interface';

export function useUser() {
  const [user, setUser] = useState<IUser>({ username: '', maxCalls: 1 });

  return { user, setUser };
}