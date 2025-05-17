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
            <div className="flex mx-auto justify-center">
                {["Personal details", "Payment", "Complete"].map(
                    (item, index) => (
                        <div
                            key={index}
                            className="flex px-3 items-center gap-3"
                        >
                                <div
                                    className={cn(
                                        "w-8 h-8 flex items-center justify-center rounded-full font-semibold bg-zinc-200 text-zinc-700",
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

                            {index !== 2 && (
                                <span
                                    id={"span" + index}
                                    className="border ml-3 h-0.5 w-20"
                                ></span>
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Indicator;
