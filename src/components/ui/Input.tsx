import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        {...props}
        className={cn(
          "focus:outline-none bg-transparent p-4 border border-white/10 rounded-xl focus-visible:border-white w-full text-white placeholder:text-zinc-600 transition-colors",
          className
        )}
      />
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        {...props}
        className={cn(
          "focus:outline-none bg-transparent p-4 border border-white/10 rounded-xl focus-visible:border-white w-full text-white placeholder:text-zinc-600 transition-colors",
          className
        )}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Input, Textarea };
