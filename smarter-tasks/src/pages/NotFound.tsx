import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/home");
  };

  return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>404 - Page Not Found</h1>
        <button
            id="backToHomeButton"
            className="text-white bg-green-600 hover:bg-green-700 font-medium rounded px-5 py-2"
            onClick={handleBackToHome}
        >
            Back to Home
        </button>
        </div>
    
  );
};

export default NotFound;
