import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Product Name must be at least 3 letters")
    .required("Product Name shouldn't be empty"),
  category: Yup.string().required("You should select a category"),
  description: Yup.string()
    .min(5, "Product Description must be at least 5 letters")
    .required("Product Description shouldn't be empty"),
  rating: Yup.number()
    .min(1, "minimum of 1 as rating")
    .required("Rating is required.")
    .typeError("Please enter a valid rating number.")
    .max(5, "Rating cannot exceed 5."),
  price: Yup.number()
    .min(2, "price must be greater than or equal to 2$")
    .typeError("Please enter a valid number.")
    .required("Price is required."),
  productImage: Yup.mixed()
    .test("fileType", "Invalid file format", (value) => {
      if (value) {
        return (
          value &&
          ["image/jpeg", "image/png", "image/gif", "image/jpg"].includes(
            value.type
          )
        );
      }
      return true;
    })
    .test(
      "fileSize",
      "File size must be less than or equal to 5MB",
      (value) => {
        if (value) {
          return value && value.size <= 5242880; // 5MB
        }
        return true;
      }
    )
    .required("Product Image is required."),
});
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
export const categorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Category name must be at least 2 characters")
    .required("Category name is required"),
  subCategories: Yup.array()
    .of(Yup.string())
    .required("At least one sub-category is required"),
  category: Yup.string().required("Product category is required"),
});
export function formatFileSize(bytes) {
  if (bytes >= 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  } else if (bytes >= 1024) {
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return bytes + " bytes";
  }
}
export const toBase64 = (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
};
