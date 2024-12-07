import { useState } from "react";

export const useFormData = (initialValues: Record<string, string>) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim(),
    }));
  };

  return { formData, handleChangeFormData, setFormData };
};
