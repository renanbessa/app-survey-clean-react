import { RemoteAddAccount } from "./add-account";
import { HttpPostClientSpy } from "@/data/test";
import { mockAddAccount } from "@/domain/test";
import { AddAccountParams } from "@/domain/usecases";
import { AccountModel } from "@/domain/models";
import faker from "faker";

type SutTypes = {
  sut: RemoteAddAccount;
  httpPostClientSpy: HttpPostClientSpy<AddAccountParams, AccountModel>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AddAccountParams,
    AccountModel
  >();
  const sut = new RemoteAddAccount(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("AddAccount", () => {
  test("Should call HttpPostClient with correct URL", async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.add(mockAddAccount());
    expect(httpPostClientSpy.url).toBe(url);
  });

  test("Should call HttpPostClient with correct body", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authenticationParams = mockAddAccount();
    await sut.add(authenticationParams);
    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });
});
