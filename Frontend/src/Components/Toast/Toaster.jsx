import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { BookCheck, Meh } from "lucide-react";

function Toast() {
    const { toast, setToast } = useAuth();

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast({ ...toast, show: false }), 5000);
            return () => clearTimeout(timer);
        }
    }, [toast.show, setToast]);

    const getToastStyle = () => {
        if (toast.type === 'success') {
            return 'bg-green-500 text-white'; // Style for success
        } else if (toast.type === 'error') {
            return 'bg-red-500 text-white'; // Style for error
        }
        return ''; // Default (optional, in case there's no valid toast type)
    };


    const getIcon = () => {
        if (toast.type === 'success') {
            return <BookCheck size={24} color="#ffffff" />;
        } else if (toast.type === 'error') {
            return <Meh className="text-white font-bold" />;
        }
        return null; // Default case if there’s no toast type or if you want to return something else.
    };

    return (
        <>
            {toast.show && (
                <motion.div
                    className={`fixed bottom-20 right-5 transform rounded-lg shadow-lg flex items-center justify-between p-4 md:w-full w-auto max-w-sm ${getToastStyle()}`}
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="flex items-center space-x-3">
                        {/* Car emoji for visual effect */}

                        <span className="text-lg font-semibold">{getIcon()}</span>
                        <span className="text-md font-medium">{toast.message}</span>
                    </div>
                    <button
                        className="text-white hover:text-gray-200 p-2"
                        onClick={() => setToast({ ...toast, show: false })}
                    >
                        {toast.type === 'success' || toast.type === 'error' ? '✕' : ''}
                    </button>
                </motion.div>
            )}
        </>
    );
}

export default Toast;
