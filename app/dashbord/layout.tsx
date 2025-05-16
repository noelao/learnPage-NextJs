import LikeMumun from "./like/page";

export default function ComplexDashboard({
    children,
    user,
    notification,
    news,
    login
}: {
    children: React.ReactNode;
    user: React.ReactNode;
    notification: React.ReactNode;
    news: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLogedIn = true;
    return isLogedIn ? (
        <>
        <div className="flex flex-col w-full p-6 gap-2">
            {children}
            <br />

            <div className="flex flex-row gap-1 w-full">
                <div className="flex flex-col gap-2 w-[80%]">
                    <div className="flex w-full">
                        {user}
                    </div>
                    <div className="flex w-full gap-2">
                        {notification}
                        <LikeMumun />
                    </div>
                </div>
                <div className="flex w-[20%]">
                    {news}
                </div>
            </div>

        </div>
        </>
    ) : (
        login
    )
}