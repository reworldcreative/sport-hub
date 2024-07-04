import { Outlet, createFileRoute } from "@tanstack/react-router";
import VideosLogInBlock from "@/components/widgets/VideosLogInBlock/VideosLogInBlock";
import "@layouts/LogInLayout.scss";

export const Route = createFileRoute("/_logInLayout")({
  component: LogInLayout,
});

function LogInLayout() {
  return (
    <div className="log-in-layout">
      <VideosLogInBlock />
      <div className="log-in-layout__container">
        <Outlet />
      </div>
    </div>
  );
}
