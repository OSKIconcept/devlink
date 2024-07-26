import LinkBar from "@/components/links";

export default function CustomizeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" gap-[16px] justify-center items-center">
        <LinkBar />
        {children}
      </body>
    </html>
  );
}
