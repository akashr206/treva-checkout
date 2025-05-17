import { Card, CardHeader, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
const Cancelation = () => {
    return (
        <Card>
            <CardContent className={" px-10 flex justify-between"}>
                <div className="w-[80%] flex flex-col gap-3">
                    <h2 className="font-semibold text-xl">
                        Cancelation Policy
                    </h2>
                    <p className="text-sm">
                        At treva, we understand that plans can change
                        unexpectedly. that’s why we’ve crafted our cancellation
                        policy to provide you with flexibility and peace of
                        mind. when you book a car with us, you have the freedom
                        to modify or cancel your reservation without incurring
                        any cancellation fees up to 12 hours/days before yor
                        scheduled pick-up time.
                    </p>
                    <Link className="text-indigo-700 font-semibold" href="#"> See more details</Link>
                </div>
                <Image
                    src="/cancelation.png"
                    width={160}
                    height={160}
                    alt="cancelation"
                ></Image>
            </CardContent>
        </Card>
    );
};

export default Cancelation;
