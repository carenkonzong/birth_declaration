export type Profile = {
  firstName: string;
  lastName: string;
  fullName?: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: {
    hospital: string;
  };
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
  phone: string;
  addInfo?: string;
};
