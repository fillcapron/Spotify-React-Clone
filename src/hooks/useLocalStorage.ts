import { useEffect, useState } from "react";

export default function useLocalStorage(key: string, value: any = null) {
    const getValue = () => {
        const storage = localStorage.getItem(key);

        if (storage) {
            return JSON.parse(storage);
        }
        return value;
    }

    const [item, setItem] = useState(getValue);

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

    }, [value, key]);

    return [item, setItem];
}