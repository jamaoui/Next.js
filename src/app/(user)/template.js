"use client"
import {Switch} from "@/components/ui/switch";
import {useState} from "react";
import {Label} from "@/components/ui/label";
import {Separator} from "@/components/ui/separator";

export default function RootLayout({children}) {
    const [field, setField] = useState(true)
    return (
        <>
           <div className="flex items-center gap-x-2 my-2">
               <Label>Airplane mode</Label>
               <Switch
                   checked={field}
                   onCheckedChange={setField}
                   aria-readonly
               />
           </div>
            <Separator/>
            {children}
        </>
    );
}
