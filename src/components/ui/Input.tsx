

interface InputProps {
  placeholder: string;
  variant?: "primary" | "secondary" | "default";
  type?: "text" | "password" | "email";
  icon?: string;
  prefix?: string;
}
const Input = ({
  placeholder,
  type = "text",
  variant = "primary",
  prefix,
}: InputProps) => {
  const variants = {
    primary:
      "text-gray-500 rounded-2xl border border-gray-[#575555] focus:outline-none focus:border-none focus:ring-2 focus:ring-[#01D2B3] p-5",
    secondary: "text-gray-500 rounded-xl border border-gray-[#575555] focus:outline-none focus:border-none focus:ring-2 focus:ring-[#01D2B3] p-5",
    default: "focus:outline-none focus:border-none m-3",
  };
  return (
    <input
      prefix={prefix}
      type={type}
      placeholder={placeholder}
      className={`${variants[variant]} w-full h-14 p-2`}
    />
  );
};

export { Input };
