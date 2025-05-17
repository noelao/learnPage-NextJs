'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";

const navLink = [
    { id:"1", name: "eps1", href: "/learn/season1/eps1", judul: "What is next js" },
    { id:"2", name: "eps2", href: "/learn/season1/eps2", judul: "Installation" },
    { id:"3", name: "eps3", href: "/learn/season1/eps3", judul: "Where to start" },
    { id:"4", name: "eps4", href: "/learn/season1/eps4", judul: "Layout and templates" },
    { id:"5", name: "eps5", href: "/learn/season1/eps5", judul: "Componen Hierarchy" },
    { id:"49", name: "eps49", href: "/learn/season1/eps49", judul: "Server-side Rendering" },
    { id:"53", name: "eps53", href: "/learn/season1/eps53", judul: "RSC Rendering Lifecycle" },
]

const season = [
  { id:"1", season: "season 1", date:"12, mei 2025" }
]

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  console.log(pathname)
  return (
      <main>
        <div className="container flex-col">

          <div className="navKiri flex flex-col bg-gray-100  p-6">
            {pathname.startsWith("/learn/season1/eps") ?
              <Link href={"/learn"} className="w-full">
                  <div className="w-full menu px-5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-[100px] mb-3 cursor-pointer transition duration-300">
                  <p>learn</p>
                  </div>
              </Link>
            :
              <Link href={"/"} className="w-full">
                  <div className="w-full menu px-5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-[100px] mb-3 cursor-pointer transition duration-300">
                  <p>home</p>
                  </div>
              </Link>
            }
            
            <div className="pilihan">
              <div className="flex flex-row justify-between">
                <h3 className="font-semibold">{season[0].season}</h3>
                <small className="text-gray-500">{season[0].date}</small>
              </div>
              <ul>
                {navLink.map((link) => {
                    const isActive = pathname === link.href && (pathname.startsWith(link.href) && link.href !== "/learn/season1");
                    if(isActive){
                        return (
                          <li key={link.id}
                          className="font-bold rounded-2xl liIni pointer-default">
                              <Link href={`/learn/season1/${link.name}`}>
                                  <small className="cursor-pointer text-gray-800">
                                  {link.name} {link.judul}
                                  </small>
                              </Link>
                          </li>
                        )
                    }else{
                        return (
                          <li key={link.id}
                          className="linini">
                              <Link href={`/learn/season1/${link.name}`}>
                                  <small className="cursor-pointer text-gray-500 hover:text-black transition-colors duration-100">
                                  {link.name} {link.judul}
                                  </small>
                              </Link>
                          </li>
                        )
                    }
                })}
              </ul>
            </div>

          </div>

          <div className="contentIni flex flex-col p-8 h-max">
            <div className="flex min-h-[89vh] flex-col">
              {children}
            </div>
            
            <div className="flex flex-col h-[30vh]">
            </div>
          </div>
        </div>
      </main>
  );
}