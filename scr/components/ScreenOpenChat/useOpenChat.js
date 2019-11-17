import {useState, useCallback, useMemo} from 'react';

export const useOpChat = (messagesBase, key, addMessageAction) => {
  const [localState, setLocalState] = useState('');

  const neededUser = useMemo(() => {
    return messagesBase.find(item => {
      return item.key === key;
    });
  }, [messagesBase, key]);

  const onSendMessage = useCallback(() => {
    if (localState === '') {
      return;
    }
    const index = messagesBase.findIndex(item => item.key === key);
    const arrayMessages = messagesBase[index].messages;
    arrayMessages.push({sender: 1, message: localState});

    addMessageAction({
      index: index,
      updatedArray: arrayMessages,
    });

    setLocalState('');
  }, [localState]);

  return {neededUser, localState, setLocalState, onSendMessage};
};

//  console.log('alo2', messagesBase);
//

//     addMessageAction({
//       index: index,
//       messagesSended: {sender: 1, message: localState},
//     });
