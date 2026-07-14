import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";
// This file defines a Zustand store for managing the shopping cart state in the application. It provides functions to add, remove, and update items in the cart, as well as to clear the cart and calculate total items and price. The cart state is persisted in local storage to maintain the cart contents across page reloads.
export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],
            addToCart: (product) =>
                set((state) => {
                    const existing = state.items.find((item) => item.product.id === product.id);
                    if (existing) {
                        return {
                            items: state.items.map((item) =>
                                item.product.id === product.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                        };
                    }
                    return { items: [...state.items, { product, quantity: 1 }] };
                }),
            removeFromCart: (productId) =>
                set((state) => ({
                    items: state.items.filter((item) => item.product.id !== productId),
                })),
            updateQuantity: (productId, quantity) =>
                set((state) => ({
                    items: quantity <= 0
                        ? state.items.filter((item) => item.product.id !== productId)
                        : state.items.map((item) =>
                            item.product.id === productId ? { ...item, quantity } : item
                        ),
                })),
            clearCart: () => set({ items: [] }),
            getTotalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
            getTotalPrice: () =>
                get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
        }),
        {
            name: "novagear-cart",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
