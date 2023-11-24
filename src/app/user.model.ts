export interface Pokedex {
    fields: User[];
  }
  
  export interface User {
    name:       string;
    label:      string;
    type:       string;
    validators: Validator[];
  }
  
  export interface Validator {
    type:    string;
    message: string;
    value?:  number | string;
    field?:  string;
  }
  