import {useState, useCallback} from 'react';

export const useSearch = arrayItems => {
  const [localState, setLocalState] = useState('');

  const filterItem = useCallback(() => {
    if (localState === '') {
      return arrayItems;
    }
    const lowerLocalState = localState.toLowerCase();
    const filteredData = arrayItems.filter(item1 => {
      const formatedMessage = item1.messages.map(item2 => {
        return item2.message.toLowerCase();
      });
      return (
        formatedMessage.findIndex(item3 => item3.includes(lowerLocalState)) > -1
      );
    });
    return filteredData;
  }, [localState]);

  return {setLocalState, filterItem};
};
