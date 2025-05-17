import Link from "next/link";

export default function page() {
    return (
        <>
            <div className="flex flex-col">
                <h1>Ini f1 page</h1>
                <Link href={"/debug/f1/f2"}>
                    <h2>f2</h2>
                </Link>
                <Link href={"/debug/f3"}>
                    <h2>f3</h2>
                </Link>
            </div>
        </>
    )
};
