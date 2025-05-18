"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Banknote } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function PaymentForm() {
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = () => {
        setSubmitting(true);
        setTimeout(() => {
            router.push("/checkout/complete");
        }, 1000);
    };
    const total = 1228.8;
    useEffect(() => {
        return () => {
            setSubmitting(false);
        };
    }, []);

    return (
        <div className="md:w-[60%]">
            <Card className={"h-full justify-between shadow-none"}>
                <CardHeader>
                    <CardTitle className="text-lg px-6 font-semibold">
                        Select Payment Option
                    </CardTitle>
                    <CardDescription className="text-sm px-6 text-gray-500">
                        All transactions are secure and encrypted
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-10 flex-1">
                    <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="space-y-1"
                    >
                        <div
                            onClick={() => setPaymentMethod("paypal")}
                            className={`flex cursor-pointer py-5 items-center justify-between p-4 border rounded-md ${
                                paymentMethod === "paypal"
                                    ? "border-blue-600"
                                    : "border-gray-200"
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="paypal" id="paypal" />
                                <Label htmlFor="paypal" className="font-medium">
                                    Paypal
                                </Label>
                            </div>
                            <div className="flex items-center text-blue-600">
                                <Image
                                    src={"/paypal.png"}
                                    width={80}
                                    height={30}
                                    alt="paypal"
                                ></Image>
                            </div>
                        </div>

                        <div
                            onClick={() => setPaymentMethod("credit-card")}
                            className={`border py-5 p-4 cursor-pointer rounded-md ${
                                paymentMethod === "credit-card"
                                    ? "border-blue-600 bg-zinc-50/50"
                                    : "border-gray-200"
                            }`}
                        >
                            <div className="flex items-center pb-1 justify-between ">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="credit-card"
                                        id="credit-card"
                                    />
                                    <Label
                                        htmlFor="credit-card"
                                        className="font-medium"
                                    >
                                        Credit card
                                    </Label>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <Image
                                        src={"/cards.png"}
                                        width={200}
                                        height={30}
                                        alt="cards"
                                    ></Image>
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {paymentMethod === "credit-card" && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut",
                                        }}
                                        className="overflow-hidden px-4 pb-4"
                                    >
                                        <p className="text-sm text-muted-foreground mb-2">
                                            Pay securely using your Visa,
                                            Maestro, Discover, or American
                                            Express card.
                                        </p>
                                        <div className="border-t border-gray-200 pt-4">
                                            <div className="space-y-4">
                                                <div>
                                                    <Label
                                                        htmlFor="card-number"
                                                        className="mb-2"
                                                    >
                                                        Card Number
                                                    </Label>
                                                    <Input
                                                        id="card-number"
                                                        placeholder="1234 1234 1234 1234"
                                                        className="w-full"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-12 max-md:grid-rows-2 gap-4">
                                                    <div className="col-span-6 max-md:col-span-12">
                                                        <Label
                                                            htmlFor="name-on-card"
                                                            className="mb-2"
                                                        >
                                                            Name on card
                                                        </Label>
                                                        <Input
                                                            id="name-on-card"
                                                            placeholder="Card name"
                                                            className="w-full"
                                                        />
                                                    </div>
                                                    <div className="col-span-3 max-md:col-span-6">
                                                        <Label
                                                            htmlFor="expiry"
                                                            className="mb-2"
                                                        >
                                                            Expiry date
                                                        </Label>
                                                        <Input
                                                            id="expiry"
                                                            placeholder="MM / YY"
                                                            className="w-full"
                                                        />
                                                    </div>
                                                    <div className="col-span-3 max-md:col-span-6">
                                                        <Label
                                                            htmlFor="cvv"
                                                            className="mb-2"
                                                        >
                                                            CVV
                                                        </Label>
                                                        <Input
                                                            id="cvv"
                                                            placeholder="CVV"
                                                            className="w-full"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div
                            onClick={() => setPaymentMethod("google-pay")}
                            className={`flex cursor-pointer py-5  items-center justify-between p-4 border rounded-md ${
                                paymentMethod === "google-pay"
                                    ? "border-blue-600"
                                    : "border-gray-200"
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                    value="google-pay"
                                    id="google-pay"
                                />
                                <Label
                                    htmlFor="google-pay"
                                    className="font-medium"
                                >
                                    Google pay
                                </Label>
                            </div>
                            <div className="flex items-center">
                                <Image
                                    src={"/gpay.png"}
                                    width={30}
                                    height={30}
                                    alt="gpay"
                                ></Image>
                            </div>
                        </div>

                        <div
                            onClick={() => setPaymentMethod("cash")}
                            className={`flex cursor-pointer py-5  items-center justify-between p-4 border rounded-md ${
                                paymentMethod === "cash"
                                    ? "border-blue-600"
                                    : "border-gray-200"
                            }`}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="cash" id="cash" />
                                <Label htmlFor="cash" className="font-medium">
                                    Cash on delivery
                                </Label>
                            </div>
                            <div className="text-green-600">
                                <Banknote size={24} />
                            </div>
                        </div>
                    </RadioGroup>
                </CardContent>
                <CardFooter className="flex justfiy-self-end px-10 flex-col space-y-4 pt-4">
                    <Button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="w-full py-6 bg-indigo-600 hover:bg-indigo-700"
                    >
                        {submitting ? (
                            <>
                                <Loader className="animate-spin" /> Confirming
                            </>
                        ) : (
                            `Pay | $ ${total}`
                        )}
                    </Button>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" default={true} />
                        <label
                            htmlFor="terms"
                            className="text-sm text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            By clicking this, I agree to treva{" "}
                            <span className="text-indigo-600">
                                Terms & Conditions
                            </span>{" "}
                            and{" "}
                            <span className="text-indigo-600">
                                Privacy Policy
                            </span>
                        </label>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
