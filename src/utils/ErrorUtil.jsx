import { toast } from "react-toastify";

export function handleError(error) {
  if (error.response && error.response.data && error.response.data.errors) {
    const { errors } = error.response.data;
    console.log(errors);
    let errorMessage = "";

    if (Array.isArray(errors) && errors.length > 0) {
      errorMessage = errors.map((error) => error.message).join(", ");
    }

    toast.error(errorMessage || "An error occurred", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  } else {
    console.error("An error occurred:", error);
    toast.error(error.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
}
