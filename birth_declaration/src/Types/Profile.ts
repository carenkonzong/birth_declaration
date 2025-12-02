export type Profile = {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
};

export type parentProfile = {
  firstName: string;
  lastName: string;
  nationalId: string;
  occupation?: string;
};

export type declarantProfile = {
  firstName: string;
  lastName: string;
  relationshipToChild: string;
  email: string;
  addInfo?: string;
  fullName?: string;
};
