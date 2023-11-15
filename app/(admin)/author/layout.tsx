export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div>Header</div>
      <main>{children}</main>
      <div>Footer</div>
    </div>
  );
}
