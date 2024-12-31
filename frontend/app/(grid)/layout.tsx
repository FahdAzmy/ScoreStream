import ButtonGradient from "../components/buttons/ButtonGradient";
import GridContainer from "../components/defaults/GridContainer";
import MaxWidthWrapper from "../components/defaults/MaxWidthWrapper";
import NavBar from "../components/nav/NavBar";
import SideBar from "../components/nav/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="background text-black grid h-screen ">
        <ButtonGradient />
        <GridContainer cols={12}>
          <div className="lg:col-span-2 md:col-span-3 h-screen bg-black/20 max-md:hidden">
            <SideBar />
          </div>
          <MaxWidthWrapper className="  lg:col-span-10 md:col-span-9 col-span-full ">
            <NavBar />
            {children}
          </MaxWidthWrapper>
        </GridContainer>
      </div>
    </main>
  );
}