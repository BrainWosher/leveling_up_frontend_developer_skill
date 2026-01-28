import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BuggButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error('');
    }
  }, []);
  return <Button onClick={onThrow}>Throw Error</Button>;
};
