import {classNames} from "shared/lib/classNames/classNames";
import cls from "./BugButton.module.scss"
import {Button} from "shared/ui/Button/Button";
import {useEffect, useState} from "react";

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({className}: BugButtonProps) => {
    const [error, setError] = useState<boolean>(false);
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            throw error;
        </Button>
    );
};