import { HttpPostClient, HttpStatusCode } from "@/data/protocols/http";
import { AddAccountParams, AddAccount } from "@/domain/usecases";
import { EmailInUseError } from "@/domain/errors";
import { AccountModel } from "@/domain/models";

export class RemoteAddAccount implements AddAccount {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AddAccountParams,
      AccountModel
    >
  ) {}

  async add(params: AddAccountParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.forbidden:
        throw new EmailInUseError();
      default:
        return null;
    }
  }
}
