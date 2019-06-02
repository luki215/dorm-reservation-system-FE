export enum Sex {
  MALE = 0,
  FEMALE = 1
}

export const sexOptions = [Sex.MALE, Sex.FEMALE];
export const getSexTranslationString = (sex: Sex): string => {
  switch (sex) {
    case Sex.MALE:
      return 'UNI-male';
    case Sex.FEMALE:
      return 'UNI-female';
  }
};

export interface User {
  id: number;
  admin: boolean;
  email: string;
  name: string;
  sex: Sex;
  allianceEnable: boolean;
  switchRoomEnable: boolean;
  differentSexOnRoomEnable: boolean;
  differentSexOnCellEnable: boolean;
  note: string;
}
