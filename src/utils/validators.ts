
import { ValidationObject } from "views/user/components/QuestionsEditor/types"

/*
  Object that contains our validators. This is to be deployed with the end user/operations
  package

*/


interface ValidatorDefinition {
   invoke: Function
}

export interface ValidationResult {
  ok: Boolean, failedValidations?: Array<string>
}

export const validators: { [key:string]: ValidatorDefinition} = {
    "isRequired": {
        invoke: (value: any, expectedValue: Boolean)=> {
          const strValue = String(value);
          return strValue.length === 0 === expectedValue;
        }
    },
    "minLength": {
        invoke: (value: string, expectedValue: number) => {
            return value.length <= expectedValue
        }
    }
}

export const checkValidation = (validations: ValidationObject, value: any): ValidationResult =>{
    const validationNames = Object.keys(validations);
    const total = validationNames.length;
    const failedValidations = []
    const result: ValidationResult = {
      ok: false
    }

    for(let counter = 0; counter <total; counter++){
        const validationName = validationNames[counter]

        const expectedResult = validations[validationName]

      if (validators[validationName] !== undefined){

        const validationFailed = validators[validationName].invoke(value, expectedResult);
        if (validationFailed){
          failedValidations.push(validationName)
        }
      }

    }
    
    if (failedValidations.length > 0){
      result.failedValidations = failedValidations
    }else{
      result.ok = true;
    }

    return result;
}