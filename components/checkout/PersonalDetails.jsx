"use client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
const PersonalDetails = () => {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center gap-4 justify-center">
            PersonalDetails
            <Button onClick={() => router.push("/checkout/payment")}>
                Go to Payment <ArrowRight />
            </Button>
        </div>
    );
};

export default PersonalDetails;
