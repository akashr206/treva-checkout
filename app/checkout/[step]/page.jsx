"use client";
import Indicator from "@/components/checkout/Indicator";
import { use } from "react";
import PaymentSection from "@/components/checkout/PaymentSection";
import PersonalDetails from "@/components/checkout/PersonalDetails";
import Complete from "@/components/checkout/Complete";
const Checkout = ({ params }) => {
    const { step } = use(params);

    return (
        <div className="h-[calc(100vh-64px)] pt-2 w-screen overflow-x-hidden bg-zinc-100">
            <div className="w-[90vw] mx-auto max-w-5xl space-y-4 py-10">
                <Indicator step={step}></Indicator>
                {step === "details" ? (
                    <PersonalDetails />
                ) : step === "payment" ? (
                    <PaymentSection />
                ) : (
                    <Complete />
                )}
            </div>
        </div>
    );
};

export default Checkout;
