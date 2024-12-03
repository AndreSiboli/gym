import React, { useContext } from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartButton from "@/app/components/buttons/CartButton";
import { CartContext, CartProvider } from "@/@context/Cart";
import { CartProductsType } from "@/@types/products";
import { MessageProvider } from "@/@context/Message";

const product: CartProductsType = {
  category: "",
  description: "",
  howMany: 1,
  id: 1,
  image: "",
  price: 0,
  rating: { count: 0, rate: 0 },
  title: "",
};

describe("Button Component", () => {
  it("should test if the function will working correctly", () => {
    const mockFunction = {
      items: [],
      addItem: jest.fn(),
      total: 0,
      deleteItem: jest.fn(),
      increaseItem: jest.fn(),
    };

    const { getByRole } = render(
      <CartContext.Provider value={{ ...mockFunction }}>
        <MessageProvider>
          <CartButton data={product} />
        </MessageProvider>
      </CartContext.Provider>
    );

    const linkButton = getByRole("button");
    fireEvent.click(linkButton);

    expect(mockFunction.addItem).toHaveBeenCalledTimes(1);
    expect(mockFunction.addItem).toHaveBeenCalledWith(product);
  });
});
