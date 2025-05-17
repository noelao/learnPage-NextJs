export const Product2 = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <h1>Product 2</h1>
}