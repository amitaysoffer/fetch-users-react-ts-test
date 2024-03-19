import { useUsers } from "../../context/UsersContext";
import UserCard from "../UserCard/UserCard";

export default function UserList() {
  const { users, isLoading, error } = useUsers();

  if (isLoading) return <h1 className="text-8xl">Loading....</h1>;
  console.log(error);
  if (error) throw new Error(error);

  return (
    <div className="py-4">
      <ul className="xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-4 ">
        {users?.map(({ id, name, username, email, phone }) => (
          <UserCard
            key={id}
            id={id}
            name={name}
            username={username}
            email={email}
            phone={phone}
          />
        ))}
      </ul>
    </div>
  );
}
