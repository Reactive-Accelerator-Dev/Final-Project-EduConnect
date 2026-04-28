import { SignupForm } from "./_components/signup-form";

export default function RegisterPage() {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <SignupForm />
      </div>
    </div>
  );
}
