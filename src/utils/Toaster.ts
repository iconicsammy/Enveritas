import { toast } from 'react-toastify';

const Toaster = {
    "success": (message: string) => {
        toast.success(message)
    },
    "error": (message: string) => {
        toast.error(message)
    }
}

export default Toaster;