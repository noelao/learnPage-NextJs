import Link from 'next/link'

export const metadata = {
  title: 'Home',
  description: 'Home page',
}

const linkToItu = [
  { id:"1", ini: "learn", judul: "Learn Next JS" },
  { id:"2", ini: "articles", judul: "Articles" },
  { id:"3", ini: "order", judul: "order Page" },
  { id:"4", ini: "dashbord", judul: "board user" },
  { id:"5", ini: "debug", judul: "bug gedebug" },
  { id:"6", ini: "photo-fed", judul: "foto-image" },
  { id:"7", ini: "route", judul: "handler" },
  { id:"8", ini: "about", judul: "coba" },
]

export default function Home(){
  return (
    <div className="container flex-col">
      <div className="header flex w-full p-4 gap-8 items-center flex-wrap">
        {linkToItu.map((linkan) => {
          return(
            <Link key={linkan.id} href={`/${linkan.ini}`}>
              <h1 className='text-gray-500 hover:text-blue-400'>{linkan.ini}</h1>
              <p className='text-gray-400'>{linkan.judul}</p>
            </Link>
          )
        })}
      </div>
      <div className="bukanHeader h-screen"></div>
    </div>
  )
}