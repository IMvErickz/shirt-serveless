import * as React from 'react';
import * as ToastRadix from '@radix-ui/react-toast';

interface ToastProps {
    error: boolean;
    message: string;
    description?: string;
    handleClose?: () => void;
    color?: string;
}

export const Toast = ({ error, message, description, handleClose, color = 'white' }: ToastProps) => {
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
        setOpen(error)
    }), []

    return (
        <ToastRadix.Provider swipeDirection="right">
            <ToastRadix.Root
                className={`rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut`}
                open={open}
                onOpenChange={setOpen}
                style={{
                    backgroundColor: color
                }}
            >
                <ToastRadix.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
                    {message}
                </ToastRadix.Title>
                <ToastRadix.Description asChild>
                    <span
                        className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
                    >
                        {description}
                    </span>
                </ToastRadix.Description>
                <ToastRadix.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
                    <button onClick={handleClose} className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
                        X
                    </button>
                </ToastRadix.Action>
            </ToastRadix.Root>
            <ToastRadix.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
        </ToastRadix.Provider>
    )
}