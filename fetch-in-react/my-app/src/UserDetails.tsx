/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};
export function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    async function getUserInfo() {
      try {
        const info = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!info.ok) {
          throw new Error(`${info.status}`);
        }
        const parsedInfo = await info.json();
        setIsLoading(false);
        setUser(parsedInfo);
      } catch (err) {
        console.log(err);
        setError(err);
        setIsLoading(false);
      }
    }
    getUserInfo();
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
