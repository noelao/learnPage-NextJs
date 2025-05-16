import { notFound } from "next/navigation";

export default async function Page({ params, }:{
    params: Promise<{ slugs: string[] }>;
}) {
    const {slugs} = await params;
    if (slugs?.length === 2){
        return <h1>Dynamic Page: {slugs[0]} - {slugs[1]}</h1>;
    } else if (slugs?.length === 1){
        return tampilkan(slugs);
    } else if (slugs?.length > 2){
        notFound();
    }
    return (
        <div className="container">
            <h1>Dynamic Page</h1>
            <p>This is a dynamic page with a slugs.</p>
        </div>
    );
}

function tampilkan(ini:string[]){
    console.log("temarien")
    const inih = ini;

    return <div className="container"><h1>Ini adalah {inih[0]}</h1></div>
}