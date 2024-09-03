import {Skeleton} from "@/components/ui/skeleton";

function SkeletonComponent() {
    return Array(9).fill('').map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[300px] w-96 rounded-xl"/>
            <div className="space-y-2">
                <Skeleton className="h-20 w-96"/>
            </div>
        </div>
    ))
}

function Loading() {
    return <div className={'grid container grid-cols-3 gap-y-2'}>
        <SkeletonComponent/>
    </div>
}

export default Loading;