//@flow
import {useState, useCallback} from 'react';

export const useLogin = () => {
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
  //   const onSubmit =
  //   console.log(localState);
  return {handleInput};
};
