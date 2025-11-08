'use client'
import LoginSignup from "@/app/SignUpLogin/LoginSignup";
import { productsDummyData, userDummyData } from "@/assets/assets";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext)
}

export const AppContextProvider = (props) => {

    const currency = process.env.NEXT_PUBLIC_CURRENCY;
    const router = useRouter();

    const [products, setProducts] = useState([]);
    const [userData, setUserData] = useState(false);
    const [isSeller, setIsSeller] = useState(true);
    const [cartItems, setCartItems] = useState({});

    const fetchProductData = async () => {
        setProducts(productsDummyData);
    };

    const fetchUserData = async () => {
        setUserData(userDummyData); // aici bagi dummy data
    };

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    };

    const updateCartQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        if (quantity === 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            if (cartItems[items] > 0) {
                totalCount += cartItems[items];
            }
        }
        return totalCount;
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            if (cartItems[items] > 0 && itemInfo) {
                totalAmount += itemInfo.offerPrice * cartItems[items];
            }
        }
        return Math.floor(totalAmount * 100) / 100;
    };

    // -------------------
    // 🔑 Handlers pentru Login și Signup
    // -------------------
    const handleLogin = (email, password) => {
        // aici e doar simulare cu dummy data
        const user = userDummyData.find(u => u.email === email);
        if (user) {
            setUserData(user);
            router.push("/"); // după login mergi pe homepage
            return true;
        }
        return false;
    };

    const handleSignup = (name, email, password) => {
        const newUser = {
            _id: Date.now().toString(),
            name,
            email,
            password, // (în realitate nu se stochează aici plaintext!)
        };
        setUserData(newUser);
        router.push("/");
        return newUser;
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    useEffect(() => {
        fetchUserData();
    }, []);

    const value = {
        currency, router,
        isSeller, setIsSeller,
        userData, setUserData,     // 👈 acum îl poți seta manual
        fetchUserData,
        products, fetchProductData,
        cartItems, setCartItems,
        addToCart, updateCartQuantity,
        getCartCount, getCartAmount,
        handleLogin, handleSignup   // 👈 funcțiile expuse pentru LoginSignup.jsx
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
};
