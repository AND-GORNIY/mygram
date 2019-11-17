import {useState, useCallback} from 'react';

export const useSearch = arrayItems => {
  const [localState, setLocalState] = useState('');

  const filterItem = useCallback(() => {
    if (localState === '') {
      return arrayItems;
    }
    const filteredData = arrayItems.filter(item => {
      return item.phone.includes(localState);
    });
    return filteredData;
  }, [localState]);

  return {setLocalState, filterItem};
};
