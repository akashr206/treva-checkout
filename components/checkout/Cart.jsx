import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShoppingCart() {
    const products = [
        {
            name: "Used Nikon D3100 with 18-55mm Lens",
            price: 120.0,
            qty: 1,
            id: "001",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQLUu0o-QR5FQ1q2smFW83gH-KbTxf2sHjgD4UNt7bTzTnXcwLVV7YEigbalG71Ta7qTW4Qy-GYOL1tAyCCmbBC-cvhptHB3W9Q5YS4MpPKVbEJpqheIKG-4w",
        },
        {
            name: "108 Mp Rear Camera Amoled Display",
            price: 1000.0,
            qty: 1,
            id: "002",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTOH15cpIBp1xS1pu8O8GtUFlI7WBYsI-Lkk55I-rJQCFtEKwwvS4SOr-tWzrg8Jma8TzeLOrSLyJu-bkY73YJv7wMod__FAqRQSkkcF3qBQwOzMUWuCDMzCw",
        },
    ];
    const subtotal = products.reduce(
        (acc, product) => acc + product.price * product.qty,
        0
    )
    const tax = 108.80
    const total = subtotal + tax;
    return (
        <div className="w-[40%] max-w-md mx-auto">
            <Card className="border-none h-full relative overflow-clip rounded-xl shadow-sm">
                <div className="absolute bottom-0 right-0 h-1/2 w-4/5 blur-3xl rounded-t-full cart" />
                <div className="absolute top-0 left-0 h-1/2 w-full blur-3xl rounded-b-full cart2" />
                <CardHeader className="pb-0 z-10">
                    <CardTitle className="text-xl font-semibold flex items-center">
                        Your cart{" "}
                        <span className="text-purple-600 ml-2">(2)</span>
                    </CardTitle>
                    <Separator className="mt-4" />
                </CardHeader>
                <CardContent className="space-y-4 z-10">
                    <div className="space-y-3">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg p-3 flex"
                            >
                                <div className="h-20 w-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        width={100}
                                        height={100}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="ml-3 flex-grow">
                                    <h3 className="font-medium text-gray-800">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-0.5 text">
                                        Qty : {product.qty}
                                    </p>
                                    <p className="font-semibold mt-2">
                                        ${product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Separator className="my-3" />

                    <Button
                        variant="outline"
                        className="w-full items-center justify-between bg-white border-gray-200 hover:bg-gray-50 m-0"
                    >
                        <div className="flex h-max items-center my-4">
                            <Ticket
                                size={20}
                                className="text-purple-600 mr-2"
                            />
                            <div className="font-medium">
                                Apply coupon code
                            </div>
                        </div>
                        <ChevronDown size={18} />
                    </Button>

                    <Separator className="my-3" />

                    <Card className="shadow-none border-gray-200 bg-white">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold">
                                Order summary
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">
                                        Subtotal
                                    </span>
                                    <span className="font-medium">
                                        ${subtotal}.00
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">
                                        Shipping
                                    </span>
                                    <span className="font-medium text-green-600">
                                        Free
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-medium">${tax}</span>
                                </div>
                                <Separator className="my-2" />
                                <div className="flex justify-between items-center font-semibold">
                                    <span>Total</span>
                                    <span className="text-xl">${total}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>
        </div>
    );
}
