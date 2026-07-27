import Footer from "./footer";
import { Reveal } from "./Reveal";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="pb-24">{children}</main>
      <Reveal index={8}>
        <Footer />
      </Reveal>
    </>
  );
}
