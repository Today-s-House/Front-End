import { useState, useCallback } from 'react';

const useText = (initalValue:string) => {
    const [value, setValue] = useState(initalValue);
    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    return { value, onChange } 
};

export default useText;