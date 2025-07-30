"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { CreditCard, Lock, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { getGuestId } from "@/hooks/getGuestId";
import * as Yup from "yup"
import { GetCartById } from "@/lib/GetProducts";
import { useMemo } from "react";

export default function CheckOut() {
  const guestId = getGuestId();
  // console.log("id", guestId)
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCart = async () => {
      const res = await GetCartById(guestId);
      setCartItems(res.items || []);
    };
    fetchCart();
  }, []);

  // const subtotal = cartItems.reduce((sum, item) => sum + item?.sets[0]?.price * item?.quantity, 0);
    const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

const { totalAmount, shippingAdded } = useMemo(() => {
  const subtotal = cartItems.reduce((total, item) => {
    const price = item.sets?.[0]?.price || 0;
    return total + price * item.quantity;
  }, 0);

  const shippingFee = 100;
  const shippingAdded = subtotal < 2000;
  let totalAmount = shippingAdded ? subtotal + shippingFee : subtotal;
    if (couponApplied) {
      totalAmount = totalAmount * 0.9;
    }
  return { totalAmount, shippingAdded };
}, [cartItems]);


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      // apartment: "",
      city: "",
      state: "",
      zip: "",
      paymentMethod: "card",
    },
    validationSchema: Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\+?[0-9]{10,15}$/, "Phone number is not valid")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zip: Yup.string()
    .matches(/^\d{4,6}$/, "ZIP must be 4 to 6 digits")
    .required("ZIP is required"),
}),
    onSubmit: async (values) => {
      setLoading(true)
      const shippingDetails = {
        name: values.firstName + " " + values.lastName,
        email: values.email,
        phone: values.phone,
        address: `${values.address}, ${values.city}`,
        city: values.city,
        state: values.state,
        zip: values.zip,
      };

      // console.log("cklsldcn")

      const orderPayload = {
        userId: guestId,
        items: cartItems,
        totalAmount,
        shippingDetails,
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const json = await res.json();

      if (json.success) {
    // ✅ Clear cart and checkout data from DB
    await fetch(`/api/cart/${guestId}`, { method: "DELETE" });
    // await fetch(`/api/checkout/${guestId}`, { method: "DELETE" });

    // ✅ Refresh page
    window.location.reload();
    alert("your order has been placed")
  }
   else {
        alert("❌ Failed to place order.");
        console.error(json.error);
      }
    },
  });

    const handleCode = (e: React.FormEvent) => {
    e.preventDefault();

    if (couponCode.trim().toLowerCase() === "welcome10") {
      setCouponApplied(true);
      setErrorMsg("");
    } else {
      setCouponApplied(false);
      setErrorMsg("Invalid coupon code");
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Form Section */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>First Name</Label>
                      <Input name="firstName" onChange={formik.handleChange} value={formik.values.firstName} />
                      {formik.touched.firstName && formik.errors.firstName && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.firstName}</p>
  )}
                    </div>
                    <div>
                      <Label>Last Name</Label>
                      <Input name="lastName" onChange={formik.handleChange} value={formik.values.lastName} />
                      {formik.touched.lastName && formik.errors.lastName && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.lastName}</p>
  )}
                    </div>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
  )}
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input name="phone" onChange={formik.handleChange} value={formik.values.phone} />
                    {formik.touched.phone && formik.errors.phone && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
  )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Street Address</Label>
                    <Input name="address" onChange={formik.handleChange} value={formik.values.address} />
                    {formik.touched.address && formik.errors.address && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
  )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label>City</Label>
                      <Input name="city" onChange={formik.handleChange} value={formik.values.city} />
                      {formik.touched.city && formik.errors.city && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
  )}
                    </div>
                    <div>
                      <Label>State</Label>
                      <Input name="state" onChange={formik.handleChange} value={formik.values.state} />
                      {formik.touched.state && formik.errors.state && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.state}</p>
  )}
                    </div>
                    <div>
                      <Label>ZIP</Label>
                      <Input name="zip" onChange={formik.handleChange} value={formik.values.zip} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment method */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={formik.values.paymentMethod}
                    onValueChange={(val) => formik.setFieldValue("paymentMethod", val)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Credit / Debit Card</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card> */}

              <Button type="submit" className="w-full cursor-pointer add-to-cart" disabled={loading}>
                <Lock className="w-4 h-4 mr-2" />
                {loading ? "placing your order": "Place Order"}
              </Button>
            </div>

            {/* Right: Summary */}
            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <p>{item.title} (x{item.quantity})</p>
                      <p>Rs {item?.sets[0]?.price * item.quantity}</p>
                    </div>
                  ))}

                  <Separator />
                  <div className="flex md:flex-row flex-col">
      <input
        type="text"
        name="code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
        className="border rounded px-2 w-[60%]"
      />

      {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

      <button onClick={handleCode} className="add-to-cart bg-black text-white rounded">
        Place Order
      </button>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>Rs {totalAmount.toFixed(0)}</span>
                  </div>
                  {shippingAdded ? <div className="flex justify-between text-sm">
                    <span>Included Rs 100 shipping fee</span>
                  </div>:null}
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>Rs {totalAmount.toFixed(0)}</span>
                  </div>
                          {couponApplied && <p className="text-green-600 text-sm">Coupon applied! 10% discount added.</p>}

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
