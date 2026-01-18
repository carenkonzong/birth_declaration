import type { Profile, ParentProfile, DeclarantProfile } from "./Profile";

export type Declaration = {
  id?: string;
  submittedAt: string;
  status: string;
  declarationId?: string;
  child: Profile;
  father: ParentProfile;
  mother: ParentProfile;
  declarant: DeclarantProfile;
};
