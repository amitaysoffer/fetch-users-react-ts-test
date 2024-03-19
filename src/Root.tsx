import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="md:max-w-[1280px] mw-full mx-auto px-4">
        <Outlet />
      </div>
    </>
  );
}
