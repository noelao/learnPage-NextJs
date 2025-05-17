import Link from "next/link";

export const metadata = {
  title: "articles in moon",
  description: "Yiihaaa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full flex-col">
        <div className="w-max">
          <Link href="/articles">
            <h2 className="">Article</h2>
          </Link>
        </div>
        
        {children}
    </div>
  );
}
