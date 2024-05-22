export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="services flex alignCenter justifyCenter flexColumn width100">
      {children}
    </main>
  );
}
