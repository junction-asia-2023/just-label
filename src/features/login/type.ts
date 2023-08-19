export type User = {
  email?: string;
  companyNo?: string;
  department?: string;
};
export type DummyUser = User & { password?: string };
