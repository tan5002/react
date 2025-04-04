import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

interface ProductFormData {
  name: string;
  description: string;
  price: string;
  colors: string[]; 
  photos: string;
}

interface FormErrors {
  name?: string;
  description?: string;
  price?: string;
  colors?: string;
  photos?: string;
}

const availableColors = ["Đỏ", "Xanh", "Vàng", "Trắng", "Đen"];

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    name: "",
    description: "",
    price: "",
    colors: [],
    photos: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = (): void => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate name
    if (!formData.name) {
      newErrors.name = "Tên sản phẩm là bắt buộc";
      isValid = false;
    } else if (formData.name.length < 6 || formData.name.length > 50) {
      newErrors.name = "Tên sản phẩm phải từ 6 đến 50 ký tự";
      isValid = false;
    }

    // Validate description
    if (!formData.description) {
      newErrors.description = "Mô tả là bắt buộc";
      isValid = false;
    } else if (formData.description.length < 6 || formData.description.length > 250) {
      newErrors.description = "Mô tả phải từ 6 đến 250 ký tự";
      isValid = false;
    }

    // Validate price
    const priceValue = parseFloat(formData.price);
    if (!formData.price) {
      newErrors.price = "Giá sản phẩm là bắt buộc";
      isValid = false;
    } else if (isNaN(priceValue) || priceValue < 1 || priceValue > 100) {
      newErrors.price = "Giá sản phẩm phải từ 1 đến 100";
      isValid = false;
    }

    // Validate colors
    if (formData.colors.length === 0) {
      newErrors.colors = "Phải có ít nhất một màu";
      isValid = false;
    }

    // Validate photos
    if (!formData.photos) {
      newErrors.photos = "Phải có ít nhất một hình ảnh";
      isValid = false;
    }

    setErrors(newErrors);
    setIsFormValid(isValid);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (color: string) => {
    setFormData((prev) => {
      const isSelected = prev.colors.includes(color);
      return {
        ...prev,
        colors: isSelected
          ? prev.colors.filter((c) => c !== color) 
          : [...prev.colors, color], 
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Sản phẩm đã được thêm thành công:", formData);
      setFormData({ name: "", description: "", price: "", colors: [], photos: "" });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="card">
          <div className="card-header">
            <h2 className="text-center">Thêm Sản Phẩm</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Mô tả sản phẩm
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.description ? "is-invalid" : ""}`}
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Giá sản phẩm
                </label>
                <input
                  type="number"
                  className={`form-control ${errors.price ? "is-invalid" : ""}`}
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
                {errors.price && <div className="invalid-feedback">{errors.price}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Màu sắc có sẵn</label>
                <div>
                  {availableColors.map((color) => (
                    <div key={color} className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={color}
                        checked={formData.colors.includes(color)}
                        onChange={() => handleCheckboxChange(color)}
                      />
                      <label className="form-check-label" htmlFor={color}>
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.colors && <div className="text-danger">{errors.colors}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="photos" className="form-label">
                  Hình ảnh sản phẩm
                </label>
                <input
                  type="file"
                  className={`form-control ${errors.photos ? "is-invalid" : ""}`}
                  id="photos"
                  name="photos"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setFormData({ ...formData, photos: file.name });
                      setErrors({ ...errors, photos: "" });
                    }
                  }}
                />
                {errors.photos && <div className="invalid-feedback">{errors.photos}</div>}
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                  Thêm sản phẩm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
