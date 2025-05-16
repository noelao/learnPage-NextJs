import Link from "next/link";

export default function Articles(){
    const arrBerita = [
        {id:"1", ini:"news-new", itu:"ina", tulisan:"Pakistan dan India mulai berdamai"}
    ]

    return (
        <div className="flex flex-col w-full h-screen p-8">
            <div className="header"></div>
                <h1>Hello article</h1>
            <div className="flex flex-col">
                {arrBerita.map((suir) => {
                    return (
                        <Link key={suir.id} href={`/articles/${suir.ini}?bah=${suir.itu}`}>
                            <p className="hover:bg-slate-200 transition-colors duration-75  w-max px-2 py-1 text-blue-600 rounded-md">
                                {suir.tulisan}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}