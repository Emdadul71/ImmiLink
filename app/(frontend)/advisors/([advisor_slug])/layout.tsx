import AdvisorHeader from "@/modules/frontend/@layout/advisor-header";

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <AdvisorHeader />
      <main>{children}</main>
    </div>
  );
}
