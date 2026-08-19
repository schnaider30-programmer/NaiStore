import { SignInButton } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover:text-dark-color text-light-color hover:cursor-pointer hoverEffect">
        Login
      </button>
    </SignInButton>
  );
}
