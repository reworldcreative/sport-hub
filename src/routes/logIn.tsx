import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/logIn")({ component: LogIn });

function LogIn() {
  return (
    <div>
      <h3>Log in page</h3>
    </div>
  );
}
