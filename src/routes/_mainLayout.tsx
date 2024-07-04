import Header from "@/components/widgets/Header/Header";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import "@layouts/MainLayout.scss";

export const Route = createFileRoute("/_mainLayout")({
  component: MainLayout,
});

function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
