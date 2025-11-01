import type { Profile } from "./Profile";

export type Declaration = {
  id: string;
  submittedAt: string;
  status: string;
  declarationId: string;
  child: Profile;
  father: Profile;
  mother: Profile;
  declarant: Profile;
};
