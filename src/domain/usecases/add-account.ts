import { AccountModel } from "@/domain/models/account-model";

export type AddAccountParams = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export interface AddAccount {
  add(params: AddAccountParams): Promise<AccountModel>;
}
