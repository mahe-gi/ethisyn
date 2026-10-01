import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isRequired?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      isRequired = false,
      id,
      name,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (name ? `input-${name}` : undefined);
    const errorId = inputId ? `${inputId}-error` : undefined;
    const helperId = inputId ? `${inputId}-helper` : undefined;

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block font-mono text-xs uppercase tracking-wider text-brand-faint select-none"
          >
            {label}
            {isRequired && <span className="text-emerald-400 ml-1">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3.5 text-brand-faint pointer-events-none flex items-center justify-center">
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            name={name}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              "w-full bg-[#080808] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-[#71717A] transition-colors duration-150 rounded-xl focus:bg-[#0f0f0f] focus:border-white focus:outline-none",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-rose-400 focus:border-rose-400 text-rose-100",
              disabled && "opacity-40 cursor-not-allowed",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3.5 text-brand-faint pointer-events-none flex items-center justify-center">
              {rightIcon}
            </span>
          )}
        </div>

        {error ? (
          <p id={errorId} className="font-mono text-xs text-rose-400 animate-in fade-in duration-150">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="font-sans text-xs text-[#A1A1AA] font-light">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
