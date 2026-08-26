import Logo from "./Logo";
import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { ClerkLoaded, Show, UserButton } from "@clerk/nextjs";

export default async function Header() {
  return (
    <header className="bg-white/70 sticky backdrop-blur-md z-50 top-0">
      <Container className="flex flex-row items-center justify-between text-light-color">
        <div className="flex items-center justify-start gap-2.5 md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <Show when="signed-in">
              <UserButton />
            </Show>
            <Show when="signed-out">
              <SignIn />
            </Show>
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}
