export type Profile = {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone?: string;
  nationalId?: string;
  gender?: string;
  dateOfBirth?: string;
  relationshipToChild?: string;
  placeOfBirth?: {
    hospital?: string;
    address?: string;
  };
};
