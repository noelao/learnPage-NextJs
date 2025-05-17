import Link from 'next/link';

export default function page (){
    return (
        <>
        <div className="flex flex-col">
            <br />
            <h2>intercepting things</h2>
            <Link href={"/debug/f1"}>
                <h1>f1</h1>
            </Link>
            <Link href={"/debug/f3"}>
                <h1>f3</h1>
            </Link>
            <br />

            <p>(.) to match segments on the same level</p>
            <p>(..) to match segments one level above </p>
            <p>(..)(..) to match segments two level above </p>
            <p>(...) to match segments from the root app directory </p>
        </div>
        </>
    )
};
