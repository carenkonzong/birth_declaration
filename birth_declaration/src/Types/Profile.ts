export type Profile = {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  cityOfBirth: string;
  timeOfBirth: string;
};

export type parentProfile = {
  firstName: string;
  lastName: string;
  nationalId: string;
  nationality: string;
};

export type declarantProfile = {
  fullName: string;
  relationshipToChild: string;
  email: string;
  phone: string;
  addInfo?: string;
};
