export interface TypeStudents {
  age: number;
  name: string;
  hometown: string;
  key: string;
}

export type RootParamsList = {
  HomeTab: undefined;
  StudentsTab: undefined;
  Language: undefined;
};

export enum Locale {
  en = 'en',
  ar = 'ar',
  tr = 'tr',
}
