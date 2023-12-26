import { Link, useNavigate } from "react-router-dom";

const LinkButton = ({ to, children }) => {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-700 hover:underline";
  if (to === "-1")
    return <button onClick={() => navigate(-1)}>&larr; Go back</button>;
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
