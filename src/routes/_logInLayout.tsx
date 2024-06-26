import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_logInLayout")({
  component: LogInLayout,
});

function LogInLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
