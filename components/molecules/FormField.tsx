import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  helper?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export const FormField = ({
  label,
  htmlFor,
  error,
  helper,
  required,
  children,
  className = "",
}: FormFieldProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-error ml-1" aria-label="required">*</span>}
      </label>
      {children}
      {helper && !error && (
        <p className="text-sm text-slate-600" id={`${htmlFor}-helper`}>
          {helper}
        </p>
      )}
      {error && (
        <p className="text-sm text-error" id={`${htmlFor}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
