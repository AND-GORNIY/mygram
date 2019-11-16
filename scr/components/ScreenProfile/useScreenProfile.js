import {useState, useCallback} from 'react';

export const useScreenProfile = (name, surname, age, bio, profileAction) => {
  const initialLocalState = {
    name,
    surname,
    age,
    bio,
  };
  const [localState, setLocalState] = useState(initialLocalState);

  const handleInput = useCallback(
    (nameField: string) => {
      return (value: string) => {
        console.log(value);
        setLocalState({...localState, [nameField]: value});
      };
    },
    [localState],
  );
  const onUnFocus = useCallback(
    (nameField: string) => {
      return event => {
        profileAction({[nameField]: event.nativeEvent.text});
      };
    },
    [localState],
  );

  return {handleInput, onUnFocus, localState};
};
