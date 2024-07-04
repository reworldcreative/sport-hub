import { createLazyFileRoute } from "@tanstack/react-router";
import "./logIn.scss";
import LogInForm from "@/components/widgets/LogInForm/LogInForm";

export const Route = createLazyFileRoute("/_logInLayout/logIn")({ component: LogIn });

function LogIn() {
  return (
    <section className="log-in-section">
      <LogInForm />
    </section>
  );
}
