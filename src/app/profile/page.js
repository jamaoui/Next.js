import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {Suspense} from "react";
async function Form() {
    const promise = new Promise(resolve => setTimeout(() => resolve('Data fetching in progress'), 3000))
    await promise
        return <h1>Form</h1>
}
export default async function Profile() {
    return <div>
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <h1>Update Profile</h1>
        <Suspense fallback={<div>Loading...</div>}>
            <h1>FORM</h1>
            <Form/>
        </Suspense>
    </div>
}
