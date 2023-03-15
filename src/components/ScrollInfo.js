import { useEffect, useState } from "react";

export function ScrollInfo() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function handleScroll() {
            console.log("Scroll Position", window.scrollY);
            setScrollPosition(window.scrollY);
        }
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
            console.log("Unmounted");
        };
    }, []);

    return <p>{scrollPosition}</p>;
}
