import React, { useEffect, useRef, useState } from 'react'

const useOtpInput = () => {
    const [otp, setOtp] = useState(Array(5).fill(""));
    const inputRefs = useRef<HTMLInputElement[] | any[]>([]);
    const [correctOtp, setCorrectOtp] = useState<"success" | "error" | "none">("none");
    const verifictionCode = 12345;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        let value: any = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }

        // verify otp 
        const combinedOtp = newOtp.join("");
        if (combinedOtp.length === otp.length) {
            let userOtp = parseInt(combinedOtp);
            if (userOtp == verifictionCode) {
                setCorrectOtp("success");
            } else {
                setCorrectOtp("error");
            }
            inputRefs.current[index].blur();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0 &&
            inputRefs.current[index - 1]
        ) {
            // Move focus to the previous input field on backspace
            inputRefs.current[index - 1].focus();
        }
    };

    const handleClick = (index: number) => {
        inputRefs.current[index].setSelectionRange(1, 1);
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);
    return { otp, handleKeyDown, handleChange, handleClick, correctOtp, inputRefs }
}

export default useOtpInput