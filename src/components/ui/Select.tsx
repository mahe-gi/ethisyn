import React, { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
  isRequired?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      placeholder = "Select an option...",
      isRequired = false,
      id,
      name,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (name ? `select-${name}` : undefined);
    const errorId = inputId ? `${inputId}-error` : undefined;
    const helperId = inputId ? `${inputId}-helper` : undefined;

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs uppercase tracking-wider font-medium text-brand-faint select-none"
          >
            {label}
            {isRequired && <span className="text-emerald-400 ml-1">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          <select
            ref={ref}
            id={inputId}
            name={name}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              "w-full appearance-none bg-[#080808] border border-white/[0.08] px-4 py-3 pr-10 text-sm text-white transition-colors duration-150 rounded-xl focus:bg-[#0f0f0f] focus:border-white focus:outline-none cursor-pointer",
              error && "border-rose-400 focus:border-rose-400 text-rose-100",
              disabled && "opacity-40 cursor-not-allowed",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-black text-[#71717A]">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="bg-black text-white py-2"
              >
                {opt.label}
              </option>
            ))}
          </select>

          <span className="absolute right-3.5 text-brand-muted pointer-events-none flex items-center justify-center">
            <ChevronDown className="w-4 h-4" />
          </span>
        </div>

        {error ? (
          <p id={errorId} className="text-xs text-rose-400 animate-in fade-in duration-150">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-xs text-[#A1A1AA]">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
