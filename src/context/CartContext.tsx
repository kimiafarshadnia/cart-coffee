import { ReactNode, createContext, useContext, useState } from "react";
import SideBarCart from './../components/elements/nav/SideBarCart';
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type CartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    addItem: (id: number) => void
    decreaseItem: (id: number) => void
    removeItem: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const CartContext = createContext({} as CartContext);

export function useCartContext() {
    return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {

    const [isOpenCart, setIsOpenCart] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', [])

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => {
        setIsOpenCart(true)
    }

    const closeCart = () => {
        setIsOpenCart(false)
    }

    function getItemQuantity(id: number) {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    function addItem(id: number) {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.id === id) == null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }

        })
    }

    function decreaseItem(id: number) {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.id === id)?.quantity == 1) {
                return currentItems.filter((item) => item.id !== id)
            } else {
                return currentItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }

        })
    }

    function removeItem(id: number) {
        setCartItems((currentItems) => {
            return currentItems.filter((item) => item.id !== id)
        })
    }

    return (
        <CartContext.Provider
            value={{
                getItemQuantity,
                addItem,
                decreaseItem,
                removeItem,
                cartQuantity,
                cartItems,
                openCart,
                closeCart
            }}
        >
            {children}
            <SideBarCart isOpenCart={isOpenCart} />
        </CartContext.Provider>
    )
}   