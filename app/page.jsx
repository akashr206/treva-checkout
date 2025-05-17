"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Home() {
    const router = useRouter();
    return (
        <div className="flex h-[calc(100vh-64px)] w-screen items-center justify-center">
            <Button onClick={() => router.push("/checkout/details")}>
                Pay Now <ArrowUpRight />
            </Button>
        </div>
    );
}
