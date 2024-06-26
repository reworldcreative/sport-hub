import Equalizer from "@/components/widgets/Equalizer/Equalizer";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_logInLayout/logIn")({ component: LogIn });

function LogIn() {
  return (
    <div>
      <h3>Log in page</h3>

      <Equalizer />
    </div>
  );
}
