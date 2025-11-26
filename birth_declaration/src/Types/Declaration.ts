import type { Profile, parentProfile, declarantProfile } from "./Profile";

export type Declaration = {
  submittedAt: string;
  status: string;
  declarationId?: string;
  child: Profile;
  father: parentProfile;
  mother: parentProfile;
  declarant: declarantProfile;
};
