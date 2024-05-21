export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="contact flex alignCenter justifyCenter flexColumn width100">
      {children}
    </main>
  );
}
