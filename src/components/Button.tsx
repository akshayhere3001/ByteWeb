interface ButtonProps {
  value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
  return (
    <button className="w-full py-3 bg-[#652DBF] text-white font-semibold rounded-lg">
      {value}
    </button>
  );
};

export default Button;
