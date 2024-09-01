import {notFound} from "next/navigation";

function displayPage(dashboardPages) {
    if (dashboardPages.length === 1) {
        switch (dashboardPages[0]) {
            case 'settings':
                return 'Settings page';
            case 'reports':
                return 'Reports page';
            case 'analytics':
                return 'Analytics page';
            default :
                notFound()
        }
    } else if (dashboardPages.length === 2 && dashboardPages[1] === 'destroy') {
        return <div>Delete your account</div>
    }
}

export default function DashboardPage({params: {dashboardPages}}) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
                <h1 className={'text-2xl'}>{displayPage(dashboardPages)}</h1>
            </div>
        </main>
    );
}
