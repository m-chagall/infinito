import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "./../store/inCartItems.js";

export default function Cart(props) {
  let state = useSelector((state) => {
    return state;
  });

  let dispatch = useDispatch();

  let [deleted, setDeleted] = useState(false);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setDeleted(false);
      }, 3000);
    };
  }, [deleted]);

  let totalPrice = 0;
  let priceAfterDiscount = 0;
  let totalPriceAfterDiscount = 0;
  let discount = 0;
  let totalDiscount = 0;
  const calcPriceAfterDiscount = (price, rate = 100) => {
    totalPrice += price;
    priceAfterDiscount = Math.round((price * (100 - rate)) / 100);
    totalPriceAfterDiscount += priceAfterDiscount;
    discount = price - priceAfterDiscount;
    totalDiscount += discount;
    return priceAfterDiscount;
  };

  const handleDeleteItem = (e) => {
    let selectedCourse = e.target.getAttribute("data-id");
    dispatch(deleteItem(selectedCourse));
    setDeleted(true);
  };

  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0 maximum-scale=1, user-scalable=0"
        />
        <title>Cart</title>
      </Helmet>
      {deleted ? (
        <div className="bg-violet-400/30 px-4 py-1 text-gray-600 rounded-xl">
          Successfully removed from cart.
        </div>
      ) : null}
      <div className="flex flex-col justify-center items-center px-6 lg:px-24">
        <div className="my-5 px-2 w-md text-start md:w-2xl lg:w-4xl">
          <span className="text-xl font-extrabold tracking-wide">
            {state.user}'s Cart
          </span>
          <hr className="my-5 md:w-2xl lg:w-4xl" />
        </div>

        {/* Cart Items */}
        <div className="items-center w-md md:w-2xl lg:w-4xl">
          <table
            id="cart-items"
            className="border-t-black border-t-2 my-5 text-center min-w-96 sm:min-w-128 lg:w-4xl">
            <colgroup className="w-md md:w-2xl lg:w-4xl">
              {/* <col className="w-12"></col> */}
              <col className="w-3/5"></col>
              <col className="hidden md:table-auto"></col>
              <col className="w-24"></col>
              <col className="w-24"></col>
              <col className="w-24"></col>
            </colgroup>
            <thead>
              <tr>
                {/* <th><label htmlFor="items" /><input type="checkbox" className="" id="items" defaultChecked nChange={() => {}} /></th> */}
                <th className="hidden">CourseID</th>
                <th>Course</th>
                <th className="hidden md:table-header-group">Instructor</th>
                <th>Price</th>
                <th>Note</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm lg:text-md">
              {state.inCartItems.map((a, i) => {
                calcPriceAfterDiscount(
                  state.inCartItems[i].price,
                  state.inCartItems[i].discountRate
                );

                return (
                  <tr
                    className="border-b border-b-indigo-200 border-dotted "
                    key={i}>
                    {/* <td><label /><input type="checkbox" defaultChecked className="" /></td> */}
                    <td className="text-start align-middle">
                      {state.inCartItems[i].title}
                    </td>
                    <td className="hidden md:table-cell text-center align-middle">
                      {state.inCartItems[i].instructor}
                    </td>
                    <td id="item-price text-center align-middle">
                      €{state.inCartItems[i].price}
                      {discount !== null && discount !== 0 ? (
                        <>
                          <br />
                          <span className="text-red-600 ml-1 text-xs">
                            (-€{discount})
                          </span>
                        </>
                      ) : null}
                    </td>
                    {/* .toLocaleString("en-US") */}
                    <td className="text-xs text-indigo-600 text-center align-middle">
                      {state.inCartItems[i].discountRate !== null &&
                      state.inCartItems[i].discountRate !== 0
                        ? state.inCartItems[i].discountCode +
                          " -" +
                          state.inCartItems[i].discountRate +
                          "%"
                        : null}
                    </td>
                    <td className="text-center align-middle">
                      <button
                        onClick={handleDeleteItem}
                        data-id={`${state.inCartItems[i].id}`}>
                        ❌
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pay and Enroll */}
          <div className="block p-4 border border-gray-200 w-md">
            <h4 className="font-bold border-b-2 pb-2 text-start">
              Confirm your courses
            </h4>
            <table className="mb-4 w-[420px] md:justify-items-stretch">
              <colgroup>
                <col className="w-[400px]"></col>
                <col className="w-24 md:min-w-32"></col>
              </colgroup>
              <tbody>
                <tr>
                  <th className="text-start">Original Price</th>
                  <td id="total-price" className="py-1 text-end">
                    €{totalPrice}
                  </td>
                </tr>
                <tr className="border-b-2 border-gray-200 text-green-600">
                  <th className="text-start">You save</th>
                  <td className="py-1 text-end">€{totalDiscount}</td>
                </tr>
                <tr className="text-red-700">
                  <th className="text-start">Confirm Total Price</th>
                  <td className="pt-2 text-end">€{totalPriceAfterDiscount}</td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              className="border border-red-600 p-1 rounded font-bold text-red-600 hover:bg-red-600 hover:text-white hover:transition-colors hover:delay-50">
              Pay and Enroll
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
