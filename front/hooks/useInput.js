import { useState, useCallback } from 'react';

// 아래와 같이  custom hooks 함수를 만들어서 사용하면
// onChnage 함수를 각각 만들지 않아도 된다.
export default (initValue = null) => {
    const [value, setter] = useState(initValue);

    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);

    return [value, handler, setter];
};
