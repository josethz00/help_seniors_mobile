import React, { useRef } from 'react';
import { TextInput } from 'react-native';


const Input = ( { placeholder, ...rest } ) => {

    const inputRef = useRef(null);

    return (
        <TextInput ref={inputRef} {...rest} placeholder={placeholder} required />
    );

};

export default Input;