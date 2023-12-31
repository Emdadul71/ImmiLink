import SideBar from "@/modules/admin/@layout/sidebar";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <div className="w-full  overflow-auto h-[100vh] bg-[#FAFDFF]">
        <main>{children}</main>
      </div>
    </div>
  );
}
