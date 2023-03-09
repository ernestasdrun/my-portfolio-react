import { useEffect, useState } from "react";

export const useScrolled = (size: number | undefined) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const listener = () => {
        if (typeof size === "number") {
            setIsScrolled(size <= window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof size === "number" && size <= window.scrollY) {
            setIsScrolled(size <= window.scrollY);
        }

        window.addEventListener("scroll", listener);
        return () => window.removeEventListener("scroll", listener);
    }, [size]);

    return isScrolled;
};