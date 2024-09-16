"use client"
import UnluckyNumberError from "@/lib/UnluckyNumberError";

export default function Home() {
    const randomNumber = Math.floor(Math.random() * 5);
    if(randomNumber >= 2) {
        throw new UnluckyNumberError("unlucky number");
    }
    return (
        <main className="flex flex-col items-center justify-between">
            {randomNumber}
        </main>
    );
}
