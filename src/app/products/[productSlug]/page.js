import {Metadata} from "next";

export async function generateMetadata({params}) {
    return {
        title: params.productSlug,
        openGraph: {
            images: [
                {}
            ]
        },
        robots: {
            googleBot: {

            }
        }

    }
}
export default function ProductDetail({params: {productSlug}}) {
    return (<>
        <h1>Product: {productSlug}</h1>
    </>);
}
