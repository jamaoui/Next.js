"use client"
import {useSelectedLayoutSegment} from "next/navigation";

export default function RootLayout({children, team, analytics}) {
    const currentSegment = useSelectedLayoutSegment('team')
    return <>
        {children}
        Segment: {currentSegment}
        <div className="flex w-10/12 mx-auto gap-x-3">
            {team}
            {analytics}
        </div>
    </>

}
