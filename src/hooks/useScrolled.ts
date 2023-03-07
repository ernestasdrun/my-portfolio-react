import { useEffect, useState } from "react";

export const useScrolled = (size: number | undefined) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const listener = () => {
        if (typeof size === "number") {
            setIsScrolled(size <= window.scrollY);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => window.removeEventListener("scroll", listener);
    }, [size]);

    return isScrolled;
};