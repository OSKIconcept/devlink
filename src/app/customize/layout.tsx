import LinkBar from "@/components/links";

export default function CustomizeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" gap-[16px] justify-center items-center">
      <LinkBar />
      {children}
    </div>
  );
}
