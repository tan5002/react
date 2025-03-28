import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';


interface ProductFormValues {
  name: string;
  description: string;
  price: number;
  colors: { value: string }[];
  photos: { value: string }[];
}

const ProductForm: React.FC = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ProductFormValues>({ mode: 'onChange', defaultValues: { colors: [{ value: '' }], photos: [{ value: '' }] } });

  const { fields: colorFields, append: addColor, remove: removeColor } = useFieldArray({ control, name: 'colors' });
  const { fields: photoFields, append: addPhoto, remove: removePhoto } = useFieldArray({ control, name: 'photos' });

  const onSubmit = (data: ProductFormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register('name', { required: true, minLength: 6, maxLength: 50 })} />
        {errors.name && <p>Name must be between 6 and 50 characters.</p>}
      </div>

      <div>
        <label>Description:</label>
        <input {...register('description', { required: true, minLength: 6, maxLength: 250 })} />
        {errors.description && <p>Description must be between 6 and 250 characters.</p>}
      </div>

      <div>
        <label>Price:</label>
        <input type="number" {...register('price', { required: true, min: 1, max: 100 })} />
        {errors.price && <p>Price must be between 1 and 100.</p>}
      </div>

      <div>
        <label>Colors:</label>
        {colorFields.map((field, index) => (
          <div key={field.id}>
            <input {...register(`colors.${index}.value`, { required: true })} />
            <button type="button" onClick={() => removeColor(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addColor({ value: '' })}>Add Color</button>
      </div>

      <div>
        <label>Photos:</label>
        {photoFields.map((field, index) => (
          <div key={field.id}>
            <input {...register(`photos.${index}.value`, { required: true })} />
            <button type="button" onClick={() => removePhoto(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => addPhoto({ value: '' })}>Add Photo</button>
      </div>

      <button type="submit" disabled={!isValid}>Submit</button>
    </form>
  );
};

export default ProductForm;
