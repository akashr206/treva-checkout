"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Indicator = ({ step }) => {
    const [selectedStep, setSelectedStep] = useState(0);
    useEffect(() => {
        switch (step) {
            case "details":
                setSelectedStep(0);
                break;
            case "payment":
                setSelectedStep(1);
                break;
            case "complete":
                setSelectedStep(2);
                break;

            default:
                break;
        }
    }, []);

    return (
        <div>
            <div className="flex mx-auto items-center justify-between md:justify-center text-sm">
                {["Personal details", "Payment", "Complete"].map(
                    (item, index) => (
                        <>
                            <div
                                key={index}
                                className="flex md:px-3 px-0.5 items-center md:gap-3 gap-1"
                            >
                                <div
                                    className={cn(
                                        "md:w-8 md:h-8 h-6 w-6 max-md:text-sm flex items-center justify-center rounded-full font-semibold shrink-0 bg-zinc-200 text-zinc-700",
                                        selectedStep === index
                                            ? "bg-indigo-300/50 border border-indigo-600 text-indigo-600"
                                            : selectedStep > index
                                            ? "bg-indigo-600 border border-indigo-600 text-white"
                                            : ""
                                    )}
                                >
                                    {index + 1}
                                </div>
                                <p
                                    className={cn(
                                        selectedStep >= index
                                            ? "text-indigo-600"
                                            : "",
                                        selectedStep === index
                                            ? "font-semibold"
                                            : ""
                                    )}
                                >
                                    {item}
                                </p>
                            </div>
                            {index !== 2 && (
                                <span
                                    id={"span" + index}
                                    className="border h-0.5 w-4 md:w-20"
                                ></span>
                            )}
                        </>
                    )
                )}
            </div>
        </div>
    );
};

export default Indicator;
