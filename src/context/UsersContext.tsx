import React from "react";
import { useFetch } from "../hooks/use-fetch";
import { UserProps } from "../Users/ types";

type UsersProviderProps = {
  children: React.ReactNode;
};

type UsersContext = {
  users: UserProps[];
  isLoading: boolean;
  error: string | undefined;
  findUser: (id: number) => UserProps;
};

const UsersContext = React.createContext<UsersContext | null>(null);

export function useUsers() {
  const context = React.useContext(UsersContext);
  if (!context) {
    throw new Error(
      "Child components of Users cannot be rendered outside the Users component!"
    );
  }

  return context;
}

const ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, isLoading, error] = useFetch<UserProps[]>(ENDPOINT);

  function findUser(id: number) {
    return users.find((user) => user.id === id) as UserProps;
  }

  return (
    <UsersContext.Provider
      value={{
        users,
        isLoading,
        error,
        findUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
