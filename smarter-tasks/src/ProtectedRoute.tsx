import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
       return <Navigate to="/signin" />;
    }

    return children;
};

export default ProtectedRoute;