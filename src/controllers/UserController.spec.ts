import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
    deleteUser: jest.fn(),
  };

  const userController = new UserController(mockUserService as UserService);

  it("Deve adicionar um novo usuário", () => {
    const mockRequest = {
      body: {
        name: "Matheus",
        email: "mat@test.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário criado",
    });
  });
  it("Deve retornar um erro se o usuário nao tiver nome", () => {
    const mockRequest = {
      body: {
        email: "mat@test.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Name obrigatório",
    });
  });

  it("Deve retornar um erro se o nome do usuário estiver vazio", () => {
    const mockRequest = {
      body: {
        name: "",
        email: "mat@test.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Name obrigatório",
    });
  });
  it("Deve retornar um erro se o usuário nao tiver email", () => {
    const mockRequest = {
      body: {
        name: "Matheus",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Email obrigatório",
    });
  });

  it("Deve retornar um erro se o email do usuário estiver vazio", () => {
    const mockRequest = {
      body: {
        name: "Matheus",
        email: "",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Email obrigatório",
    });
  });
  it("Deve chamar a function getAllUser", () => {
    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();
    userController.getAllUsers(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
  });

  it("Deve retornar um erro se o value estiver vazio", () => {
    const mockRequest = {
      body: {
        value: "",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({
      message: "Bad request! Value obrigatório",
    });
  });

  it("Deve retornar um erro se nao tiver o value no body", () => {
    const mockRequest = {
      body: {
        value: "Matheus",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário deletado",
    });
  });
});
