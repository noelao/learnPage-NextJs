import Link from "next/link";

const linkan = [
    {id:"1", link:"lanjut"},
    {id:"2", link:"lagi"},
    {id:"3", link:"redirect"},
    {id:"4", link:"time"}
]

export default function page() {
    return (
        <div className="p-18 flex flex-col">
            <h2>will render after router.ts and conflic</h2>
            {linkan.map((inian) => {
                return (
                    <Link key={inian.id} className="text-emerald-500 underline" href={`/route/${inian.link}`}>{inian.link}</Link>
                )
            })}
        </div>
    )
};
