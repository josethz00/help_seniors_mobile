import React from 'react';
import { TextInput } from 'react-native';
import { maskCep, maskPhone } from '../../utils/masks';


const MaskedInput = ( { mask, inputMaskChange, ...rest } ) => {

    function handleChange (text) {
        if (mask === "cep") {
            const value = maskCep(text);
            inputMaskChange(value);
          }
          if (mask === "phone") {
            const value = maskPhone(text);
            inputMaskChange(value);
          }
    }

    return (
        <TextInput {...rest} onChangeText={(text) => handleChange(text)} />
    );

};

export default MaskedInput;