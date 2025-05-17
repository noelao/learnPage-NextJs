// ini akan membuat dia memiliki static params
// function harus memiliki nama generateStaticParams
export async function generateStaticParams() {
    return [{id: "1"},{id: "2"},{id: "3"}]
}
// fungsi static params adalah membuat website jadi lebih cepat dan optimal

// function ini akan mematikan fungsi dynamic sehingga bila meminta /4 maka dia akan 404 error 
// alias dia tidak akan membuat file baru
// 
// export const dynamicParams = false
// 

export default async function ParamsStatic({params, }: {
    params: Promise<{id:string}>;
}) {
    const {id} = await params;
    // saat client request pada dynamic-and-static-params/1 waktu akan menunjukkan dimana aplikasi ini di build / npm run build karena static dan juga /2 /3
    // tetapi  ketika dynamic-and-static-params/4 dia akan membuat file baru dan file itu akan tetap ada di server
    // jadi file itu akan muncul ketika dipanggil lagi /4 dan waktunya akan menunjukkan dimana file itu dirender / pertamakali /4 di panggil
    // begitu juga dengan param-param lainnya
    return (
        <div className="container">
            <h1>
                id nya : {id} : dan di render pada {new Date().toLocaleTimeString()}
            </h1>
        </div>
    )    

};
