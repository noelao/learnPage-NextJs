import Link from "next/link";

export default function page() {
    return (
        <>
        <div className="flex flex-col">
            <h1>
                Ini f2 ori
            </h1>
            <Link href={"/debug/f4"}>
                <h1>h4</h1>
            </Link>
            <small>refresh page to see original of f2</small>
        </div>
        </>
    )
};
