import Container from "./Container";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import LogoText from "./LogoText";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <FooterBottom />
        <div className="flex items-center">
          ©️{new Date().getFullYear()}{" "}
          <LogoText className="text-sm md:text-sm hover:cursor-pointer tracking-wide" />
        </div>
      </Container>
    </footer>
  );
}
