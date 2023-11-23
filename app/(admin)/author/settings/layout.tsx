import ProfileLayout from "@/modules/admin/@layout/profile-layout";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <ProfileLayout />
      <div className="w-full  overflow-auto  bg-[#FAFDFF]">
        <main>{children}</main>
      </div>
    </div>
  );
}
