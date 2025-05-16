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

    const {eps} = await params;
    if (eps?.length === 1){
        return <>
        <h1>{eps}</h1>
        {eps[0] == "eps4" ? iniPage : eps[0] == "eps5"? iniPage2 :""}
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