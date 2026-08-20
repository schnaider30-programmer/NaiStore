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
        <div className="py-6 border-t text-center text-sm font-poppins">
          <div className="inline-flex items-center">
            © {new Date().getFullYear()}
            <LogoText className="text-sm md:text-sm tracking-wider cursor-pointer" />
            . All right reserved
          </div>
        </div>
      </Container>
    </footer>
  );
}
