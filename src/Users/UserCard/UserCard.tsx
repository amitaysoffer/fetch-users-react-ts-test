import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { UserDetailsProps } from "../ types";

export default function UserCard({
  name,
  username,
  email,
  phone,
  id,
}: UserDetailsProps) {
  return (
    <Link to={`/users/${id}`} data-testid={`user-item-${id}`}>
      <Card className="border-2 border-blue-300 w-full h-full divide-y flex-col text-center">
        <h2 className="text-lg font-bold pb-2">{name}</h2>
        <h2 className="font-mono py-2">@{username}</h2>
        <h2 className="py-2">email: {email}</h2>
        <h2 className="pt-2">phone: {phone}</h2>
      </Card>
    </Link>
  );
}
