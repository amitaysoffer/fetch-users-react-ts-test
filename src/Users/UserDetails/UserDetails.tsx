import { Link, useNavigate, useParams } from "react-router-dom";
import { useUsers } from "../../context/UsersContext";
import Card from "../../components/Card";
import BackArrowSVG from "../../svgs/BackArrowIcon";
import { UserProps } from "../ types";

export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { findUser, users } = useUsers();

  if (users == null || !id) {
    navigate("/");
    return null;
  }

  const user = findUser(parseInt(id));

  return (
    <>
      <div className="max-w-[690px] mt-4 mx-auto relative">
        <Link to="/" className="inline-block">
          <BackArrowSVG />
        </Link>
        <div className="">
          <h2 className="text-3xl font-semibold pb-4">
            {user.name}- @{user.username}
          </h2>
          <hr />
          <UserMetaData user={user} />
        </div>
      </div>
    </>
  );
}

const UserMetaData = ({ user }: { user: UserProps }) => {
  return (
    <>
      <div className="flex justify-between gap-10 mt-4 pb-8 flex-wrap">
        <div>
          <h3 className="text-2xl font-semibold">Company</h3>
          <div>
            <p className="font-semibold">name: </p>
            <p>{user.company.name}</p>
          </div>
          <div className="my-2">
            <p className="font-semibold">catch phrase: </p>
            <p>{user.company.catchPhrase}</p>
          </div>
          <div>
            <p className="font-semibold">bs: </p>
            <p>{user.company.bs}</p>
          </div>
        </div>
        <Card shadowSize="lg" className="py-6 px-4 flex flex-col gap-4">
          <div>
            <p className="font-semibold">Phone: </p>
            <p>{user.phone}</p>
          </div>
          <div>
            <p className="font-semibold">email: </p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="font-semibold">website: </p>
            <p>{user.website}</p>
          </div>
        </Card>
      </div>
      <hr />
      <div className="pt-8">
        <div>
          <h3 className="text-2xl font-semibold">Address</h3>
          <div>
            <p>city: {user.address.city}</p>
          </div>
          <div className="my-2">
            <p>street: {user.address.street}</p>
          </div>
          <div>
            <p>zipcode: {user.address.zipcode}</p>
          </div>
        </div>
      </div>
    </>
  );
};
