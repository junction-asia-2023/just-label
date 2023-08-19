export type User = {
  name?: string;
  email?: string;
  companyNo?: string;
  department?: string;
  position?: string;
};
export type DummyUser = User & { password?: string };

export type InputKey = {
  email: string;
  password: string;
  dataError: string;
};
