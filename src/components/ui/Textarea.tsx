import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  isRequired?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      isRequired = false,
      id,
      name,
      rows = 4,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (name ? `textarea-${name}` : undefined);
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

        <textarea
          ref={ref}
          id={inputId}
          name={name}
          rows={rows}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            "w-full bg-[#080808] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder-[#71717A] transition-colors duration-150 rounded-xl focus:bg-[#0f0f0f] focus:border-white focus:outline-none resize-y",
            error && "border-rose-400 focus:border-rose-400 text-rose-100",
            disabled && "opacity-40 cursor-not-allowed",
            className
          )}
          {...props}
        />

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

Textarea.displayName = "Textarea";
