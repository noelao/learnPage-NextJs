import Link from "next/link";

export default async function Eps({params, }:{
    params: Promise<{ eps: string[] }>;
}){
    await new Promise((resolve) => setTimeout(() => {
        resolve("intention delay");
    }, 750
    ));

    const iniPage = (
        <div className="flex flex-col">
            <h2>Layout and templates</h2>

            <div className="illustrasi h-max w-max flex flex-col items-center">
                <small>layout.tsx</small>
                <div className="flex flex-col justify-center items-center border-2 border-black w-82 aspect-square">
                    <small>templates.tsx</small>
                    <div className="border-2 border-black h-[80%] w-[80%] items-center flex justify-center">
                        <small>page.tsx</small>
                    </div>
                </div>
            </div>
        </div>
    )
    const iniPage2 = (
        <>
        <h1>Componen Hierarchy</h1>

        <div className="flex gap-5">
            <div className="flex flex-col rounded-lg border-1 border-black p-7">
                <small className="border-b-1 border-black">layout.js</small>
                <small className="border-b-1 border-black">template.js</small>
                <small className="border-b-1 border-black">error.js</small>
                <small className="border-b-1 border-black">loading.js</small>
                <small className="border-b-1 border-black">not-found.js</small>
                <small >page.js</small>
            </div>
            <div className="flex">
                <small>
        {`
            <Layout>`}<br/>{`
                <Template>`}<br/>{`
                    <ErrorBoundary fallback={<ErrorPage />}>`}<br/>{`
                        <Suspense fallback={<LoadingPage />}>`}<br/>{`
                            <ErrorBoundary fallback={<NotFoundPage />}>`}<br/>{`
                                </Page>`}<br/>{`
                            </ErrorBoundary>`}<br/>{`
                        </Suspense>`}<br/>{`
                    </ErrorBoundary>`}<br/>{`
                </Template>`}<br/>{`
            </Layout>
        `}
                </small>
            </div>
        </div>
        </>
    )
    const iniPage49 = (
        (
            <>
            <br />
            <p>
                cara ini membuat website menjadi tidak boring dan terlihat lebih selalu siap
            </p>
            <p>
                dengan cara meresponse sepotong demi sepotong. Lalu ketika semua potongan selesai dikirim, direfresh dan tampilkan utuh.
            </p>
            <br />
            <p>* kekurangannya adalah, walaupun datanya sedikit / simple html penampilannya akan tetap lama</p>

            <div className="flex py-12">

            <div className="flex flex-col items-end">
                <div className="icon">
                    <h1>
                    👤
                    </h1>
                </div>
                <div className="flex flex-col items-end">
                    <p>|</p>
                    <p>Non-interactive UI |</p>
                </div>
                <div className="flex flex-col">
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                </div>
                <div className="flex">Interactive UI |</div>
            </div>
            <div className="flex flex-col px-12 ">
                <div className="icon">
                    <h1>?</h1>
                </div>
                <div className="flex flex-col items-center">
                    <p>request</p>
                    <p>{"----------------------->"}</p>
                    <p>{"<-----------------------"}</p>
                    <p>full HTML + JS reference</p>
                    <p className="text-transparent">_</p>
                </div>
                <div className="flex flex-col items-center">
                    <p>request JS</p>
                    <p>{"----------------------->"}</p>
                    <p>{"<-----------------------"}</p>
                    <p>JS</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-transparent">_</p>
                    <p>--\</p>
                    <p>{"<-/ Hydration"}</p>
                </div>
            </div>
            <div className="flex flex-col ">
                <div className="icon">
                    <h1>
                        🖥️
                    </h1>
                </div>
                <div className="flex flex-col">
                    <p>|</p>
                    <p>| --\</p>
                    <p>{"| <-/ Generated HTML"}</p>
                </div>
                
                <div className="flex flex-col">
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                    <p>|</p>
                </div>
                <div className="flex">|</div>
            </div>

            </div>
            <br />
            <h2>Server-side solutions</h2>
            <p>1. Static Site Generation (SSG)</p>
            <p>2. Server-side Rendering (SSR)</p>
            <br />
            <p>SSG cocok untuk membuat website yang selalu sama seperti article atau website</p>
            <p>sedangkan SSR optimal digunakan untuk menampilkan website seperti tiktok, facebook, reels, twitter, dimana isinya akan berubah-ubah lebih progresif.</p>
            <br />
            <h2>kekurangan SSR</h2>
            <p>* harus melakukan semua fetch data sebelum mulai merender, tidak bisa tiba2 fetch</p>
            <p>solusi : </p>
            <p>HTML streaming on the server</p>
            <p>Code splitting</p>
            <p>pakai React.lazy</p>
            <p>di react ada function {"<Suspense />"} yang akan di tampilkan sebelum Hydration, seperti loading .</p>

            </>
        )
    )
    const iniPage53 = (
        <>
        <div >
            youtube link : 
            <p className="border-b-[1px] border-green-500 text-green-500 hover:opacity-50 transition-opacity duration-200 w-max">
                <Link href={"https://www.youtube.com/watch?v=aZAMP-4Szgg&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&index=53"}>https://www.youtube.com/watch?v=aZAMP-4Szgg&list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&index=53</Link>
            </p>
        </div>
        </>
    )

    const {eps} = await params;
    if (eps?.length === 1){
        return <>
        <h1>{eps}</h1>
        {eps[0] == "eps4" ? iniPage : 
         eps[0] == "eps5"? iniPage2 :
         eps[0] == "eps49"? iniPage49 :
         eps[0] == "eps53"? iniPage53 :
         ""}
        </>;
    } else if (eps?.length > 1){
        return <h1>Not Fund Link {eps[0]}</h1>;
    }
    return (
        <div className="container flex-col">
            <h1>Dynamic Page</h1>
            <p>This is a dynamic page with a slugs.</p>
            {iniPage}
        </div>
    )
}