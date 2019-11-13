import {useState, useCallback} from 'react';

export const useLogin = loginAction => {
  const initialLocalState = {
    phoneNumber: '',
    password: '',
  };
  const [localState, setLocalState] = useState(initialLocalState);

  const handleInput = useCallback(
    (nameField: string) => {
      return (value: string) => {
        setLocalState({...localState, [nameField]: value});
      };
    },
    [localState],
  );
  const onSubmit = useCallback(() => {
    loginAction(localState);
  }, [localState]);

  return {handleInput, onSubmit};
};
