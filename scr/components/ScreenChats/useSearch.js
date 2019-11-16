import {useState, useCallback} from 'react';
// import {patientData} from '../PatientData/patientData';

export const useSearch = arrayItems => {
  const [localState, setLocalState] = useState('');

  const filterItem = useCallback(() => {
    if (localState === '') {
      return arrayItems;
    }
    const filteredData = arrayItems.filter(item1 => {
      const formatedMessage = item1.messages.map(item2 => {
        return item2.toLowerCase().slice(5);
      });
      const lowerLocalState = localState.toLowerCase();
      return (
        formatedMessage.findIndex(item3 => item3.includes(lowerLocalState)) > -1
      );
    });
    return filteredData;
  }, [localState]);

  return {setLocalState, filterItem};
};
