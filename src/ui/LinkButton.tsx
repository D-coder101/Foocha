import { Link, useNavigate } from "react-router-dom";

interface LinkButtonProps {
  children: React.ReactNode;
  to: string;
}

function LinkButton({ children, to }: LinkButtonProps) {
  const navigate = useNavigate();
  const className =
    " text-blue-400 text-sm hover:text-blue-600 hover:underline transition-colors duration-300";

  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
