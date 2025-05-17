import Payment from "@/components/checkout/Paymentform";
import Cart from "@/components/checkout/Cart";
import Cancelation from "@/components/checkout/Cancellation";

const PaymentSection = () => {
    return (
        <>
            <div className="flex gap-4">
                <Payment></Payment>
                <Cart></Cart>
            </div>
            <Cancelation></Cancelation>
        </>
    );
};

export default PaymentSection;
