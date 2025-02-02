import { toast } from "react-toastify";

export const handleFirebaseError = (error) => {
  console.log("Firebase Error:", error); // Debugging step

  if (error?.code) {
    switch (error.code) {
      case "auth/invalid-credential":
        toast.error("User not found!");
        break;
      case "auth/email-already-exists":
        toast.error("Email already exist");
        break;
      case "auth/internal-error":
        toast.error("Something has went wrong");
        break;
      case "auth/invalid-email":
        toast.error("Email is invalid");
        break;
      case "auth/invalid-password":
        toast.error("Password should be atleast 6 characters");
        break;
      case "auth/internal-error":
        toast.error("Something has went wrong");
        break;
      default:
        toast.error("Something went wrong!");
        console.error("Unhandled Firebase Error:", error.message);
    }
  } else {
    toast.error(error.message);
  }
};
