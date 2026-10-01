import React, { forwardRef } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, name, checked, onChange, disabled, className, ...props }, ref) => {
    const inputId = id || (name ? `checkbox-${name}` : undefined);
    const errorId = inputId ? `${inputId}-error` : undefined;

    return (
      <div className="space-y-1.5 text-left">
        <label
          htmlFor={inputId}
          className={cn(
            "flex items-start gap-3 select-none cursor-pointer group",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              ref={ref}
              id={inputId}
              name={name}
              type="checkbox"
              checked={checked}
              onChange={onChange}
              disabled={disabled}
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              className="sr-only peer"
              {...props}
            />
            <div
              className={cn(
                "w-4 h-4 rounded border border-white/[0.12] bg-[#0a0a0a] flex items-center justify-center transition-all duration-150 peer-focus-visible:outline-2 peer-focus-visible:outline-white peer-checked:bg-white peer-checked:border-white group-hover:border-white/30",
                error && "border-rose-400"
              )}
            >
              <Check className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
            </div>
          </div>

          <span className="font-sans text-xs sm:text-sm text-[#A1A1AA] group-hover:text-white transition-colors leading-relaxed font-light">
            {label}
          </span>
        </label>

        {error && (
          <p id={errorId} className="font-mono text-xs text-rose-400 pl-7 animate-in fade-in duration-150">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
