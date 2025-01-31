/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import { motion as m } from 'framer-motion';
import { CircleAlert } from "lucide-react";
import { Control, Controller, FieldError, RegisterOptions } from 'react-hook-form';
import { FormValues } from "Types";

interface FormInputProps {
  control: Control<FormValues, any>;
  name: "consent" | "firstName" | "lastName" | "emailAddress" | "message";
  label: string;
  rules:
    | Omit<
        RegisterOptions<
          FormValues,
          "consent" | "firstName" | "lastName" | "emailAddress" | "message"
        >,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  error?: FieldError;
  placeholder: string
}

const FormInput = ({ control, name, label, rules, error, placeholder }: FormInputProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="text-neutral-0 block mb-1">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Input
            {...field}
            value={typeof field.value === 'boolean' ? String(field.value) : field.value}
            placeholder={placeholder}
            className={`bg-transparent text-neutral-0 py-4 px-3 rounded-lg  cursor-pointer ${
              error ? "border-red-500" : ""
            }`}
            aria-labelledby={name}
          />
        )}
      />
      <div className="h-4">
        {error && (
          <div className="flex items-center gap-2 mt-2">
            <CircleAlert color="red" size={15} />
            <m.p
              className="text-red text-sm"
              initial={{ translateX: -100 }}
              animate={{ translateX: 0 }}
            >
              {error.message}
            </m.p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;