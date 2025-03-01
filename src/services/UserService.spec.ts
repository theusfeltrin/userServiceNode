import { User, UserService } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const userService = new UserService(mockDb);

  it("Deve adicionar um novo usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("mat", "mat@test.com");
    expect(mockConsole).toHaveBeenCalledWith("DB atualizado", mockDb);
  });

  it("Deve adicionar um novo usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.deleteUser("mat");
    expect(mockConsole).toHaveBeenCalledWith("DB atualizado", mockDb);
  });
});
