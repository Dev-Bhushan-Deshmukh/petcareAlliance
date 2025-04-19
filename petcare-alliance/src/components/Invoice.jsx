import React, { useEffect, useState } from "react";
import { invoicItems } from "../Data/data";
import { div } from "framer-motion/client";
import { useDispatch, useSelector } from "react-redux";
import { addNew, increaseQuantity, decreaseQuantity } from "../slices/invoices";
import { InvoiceContainer } from "./InvoiceContainer";
import { BillInvoice } from "./BillInvoice";
export const Invoice = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.invoice);
  const [invoicItems_, setinvoicItems] = useState([]);
  const [popup,setPopUp]=useState(false);
  useEffect(() => {
    setinvoicItems(invoicItems);
  }, []);

  const updateItems = (option, id) => {
    if (option === "+") {
      dispatch(increaseQuantity(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
    // setinvoicItems(temp);
  };

  return (
    <div className="w-full h-[100%]  flex justify-between relative">
      <div className="bg-slate-50 w-[40%] h-[50%] border-1 border-slate-300 ">
        {invoicItems_.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-between p-1 w-full h-[40px] bg-slate-900 m-2 rounded-md text-white"
            >
              <span>{item.name}</span>
              <span>{item.price}</span>
              {count.findIndex((inexItem) => inexItem.id == item.id) == -1 ? (
                <div onClick={() => dispatch(addNew(item))}>Add</div>
              ) : (
                <div className="flex items-center justify-between p-1 w-[200px] bg-green-700 rounded-md">
                  <button onClick={() => updateItems("-", item.id)}>-</button>
                  <span>
                    {count.findIndex((Cartitem) => Cartitem.id == item.id) == -1
                      ? item.quantity
                      : count[
                          count.findIndex((inexItem) => inexItem.id == item.id)
                        ].quantity}
                  </span>
                  <button onClick={() => updateItems("+", item.id)}>+</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <InvoiceContainer setPopUp={setPopUp} />

      {popup && 
      <BillInvoice  setPopUp={setPopUp} />}
    </div>
  );
};

// 🧾 Invoice Generator with Itemized Billing
// 🧠 Concept:
// Build a component where users can:

// Add multiple items to an invoice (each item being an object with name, quantity, price)

// See the invoice table update in real-time

// Calculate totals with tax and discounts

// Download or preview a printable invoice

// 🔧 Features to Practice:
// Dynamic forms with arrays of objects

// Real-time total calculation

// Array methods like reduce, map, filter

// Conditional rendering

// State management

// Optionally, PDF generation (e.g. jspdf)

// 🧪 Sample Object:

// const invoice = {
//   customer: "John Doe",
//   items: [
//     { id: 1, name: "Laptop", quantity: 1, price: 700 },
//     { id: 2, name: "Mouse", quantity: 2, price: 20 },
//   ],
//   discount: 10, // in %
//   tax: 5 // in %
// };
