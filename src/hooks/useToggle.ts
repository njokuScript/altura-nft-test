import { useState } from "react";

export default function useToggle(initialState: boolean = false) {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);

    const toggle = (state?: any)=> {
        if(typeof state === 'boolean') {
            return setIsOpen(state);
        }

        setIsOpen( prev => !prev);
    }

    return { isOpen, toggle }
}