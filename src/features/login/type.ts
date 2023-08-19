export type User = {
  email?: string;
  companyNo?: string;
  department?: string;
};
export type DummyUser = User & { password?: string };

export type InputKey = {
  email: string;
  password: string;
  dataError: string;
};
