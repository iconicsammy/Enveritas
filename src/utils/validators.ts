
import { ValidationObject } from "views/user/components/QuestionsEditor/types"

/*
  Object that contains our validators. This is to be deployed with the end user/operations
  package

*/


interface ValidatorDefinition {
   invoke: Function
}

export const validators: { [key:string]: ValidatorDefinition} = {
    "isRequired": {
        invoke: (value: any, expectedValue: Boolean)=> {
          return value == undefined || value  == null
        }
    },
    "minLength": {
        invoke: (value: string, expectedValue: number) => {
            return value.length <= expectedValue
        }
    }
}

export const checkValidation = (validations: ValidationObject, value: any): Boolean =>{
    const validationNames = Object.keys(validations);
    const total = validationNames.length;

    for(let counter = 0; counter <total; counter++){
        const validationName = validationNames[counter]
        const expectedResult = validations[validationName]
      if (validators[validationName] !== undefined){
        return validators[validationName].invoke(value, expectedResult)
      }

    }
    return false;
}