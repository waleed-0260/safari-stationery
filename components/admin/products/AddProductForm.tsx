"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from 'react-select';

type CategoryOption = {
  value: string;
  label: string;
};

interface FormValues {
  title: string;
  description: string;
  price: string;
  compare_at_price: string;
  category: string[];           // ✅ string array
  sub_category: string;
  stock: string;
  isFeatured: string;
  images: File[];
}

const AddProductForm = () => {
  const categoryOptions = [
    { value: 'Sale', label: 'Sale' },
    { value: 'Deals', label: 'Deals' },
    { value: 'Daily Stationery', label: 'Daily Stationery' },
    { value: 'School Supplies', label: 'School Supplies' },
    { value: 'Art Supplies', label: 'Art Supplies' },
    { value: 'Party Supplies', label: 'Party Supplies' },
    { value: 'Toys', label: 'Toys' },
  ];

  const subCategoryMap = {
  "Sale": [
    { value: "Painting", label: "Painting" },
    { value: "Sculpture", label: "Sculpture" },
  ],
  "Deals": [
    { value: "Notebooks", label: "Notebooks" },
    { value: "Pencils", label: "Pencils" },
  ],
  "Daily Stationery": [
    { value: "Stickers", label: "Stickers" },
    { value: "Washi Tape", label: "Washi Tape" },
  ],
  "School Supplies": [
    { value: "Files", label: "Files" },
    { value: "Staplers", label: "Staplers" },
  ],
};

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      description: "",
      price: "",
      compare_at_price: "",
      category: [],
      sub_category: "",
      stock: "",
      isFeatured: "false",
      images: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      price: Yup.number().required("Price is required"),
      compare_at_price: Yup.number(),
      category: Yup.array().min(1, "Select at least one category"),
      sub_category: Yup.string().required("Sub Category is required"),
      stock: Yup.number().required("Stock is required"),
      isFeatured: Yup.string().required("Please choose an option"),
      images: Yup.array()
        .min(2, "Please upload 2 images")
        .max(2, "Only 2 images are allowed"),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();

        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("price", values.price);
        formData.append("compare_at_price", values.compare_at_price);
        formData.append("stock", values.stock);
        formData.append("isFeatured", values.isFeatured);
        formData.append("category", JSON.stringify(values.category));
        formData.append("sub_category", values.sub_category);

        values.images.forEach((file: File) => {
          formData.append("images", file);
        });

        const res = await fetch("/api/hello", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();
        if (data.success) {
          alert("Product added successfully!");
          formik.resetForm();
        } else {
          alert("Failed to add product.");
        }
      } catch (error) {
        console.error("Error uploading product:", error);
        alert("Something went wrong.");
      }
    },
  });


  const subCategoryOptions =
    formik.values.category.length > 0 &&
    formik.values.category[0] in subCategoryMap
      ? subCategoryMap[
          formik.values.category[0] as keyof typeof subCategoryMap
        ]
      : [];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">Add Product</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter product title"
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
          )}
        </div>

        {/* Price & Compare Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Price (Rs)</label>
            <input
              name="price"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="0.00"
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Compare at Price (Rs)</label>
            <input
              name="compare_at_price"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.compare_at_price}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Stock */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Stock</label>
          <input
            name="stock"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stock}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {formik.touched.stock && formik.errors.stock && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.stock}</p>
          )}
        </div>

        {/* Category & Sub Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Category</label>
           {/* <select
  name="category"
  multiple
  onChange={(e) => {
    const options = Array.from(e.target.selectedOptions).map((opt) => opt.value);
    formik.setFieldValue("category", options);
  }}
  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
>
  <option value="Fine Arts">Fine Arts</option>
  <option value="School Supplies">School Supplies</option>
  <option value="Cute Stationery">Cute Stationery</option>
  <option value="Office Supplies">Office Supplies</option>
  <option value="Birthday & Gifts">Birthday & Gifts</option>
  <option value="Sports & Toys">Sports & Toys</option>
  <option value="Packing & Industry">Packing & Industry</option>
</select> */}
<Select
  isMulti
  name="category"
  options={categoryOptions}
  className="basic-multi-select"
  classNamePrefix="select"
value={categoryOptions.filter(option => formik.values.category.includes(option.value))}
  onChange={(selected) =>
    formik.setFieldValue("category", selected.map((item) => item.value))
  }
/>

            {formik.touched.category && formik.errors.category && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.category}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Sub Category</label>
            <Select
          name="sub_category"
          options={subCategoryOptions}
          isDisabled={!formik.values.category}
          value={subCategoryOptions.find(
            (opt:any) => opt.value === formik.values.sub_category
          )}
            onChange={(option) => {
    if (option) {
      formik.setFieldValue("sub_category", option.value);
    } else {
      formik.setFieldValue("sub_category", ""); // or null
    }
  }}
        />
            {formik.touched.sub_category && formik.errors.sub_category && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.sub_category}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            rows={4}
            placeholder="Write product description..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
          )}
        </div>

        {/* Is Featured */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Featured?</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isFeatured"
                value="true"
                checked={formik.values.isFeatured === "true"}
                onChange={formik.handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="isFeatured"
                value="false"
                checked={formik.values.isFeatured === "false"}
                onChange={formik.handleChange}
              />
              <span>No</span>
            </label>
          </div>
          {formik.touched.isFeatured && formik.errors.isFeatured && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.isFeatured}</p>
          )}
        </div>

       {/* Image Upload (Only 2 images allowed) */}
<div>
  <label className="block mb-1 font-medium text-gray-700">
    Upload 2 Images
  </label>

  <div className="grid grid-cols-2 gap-4">
    {formik.values.images.length > 0 &&
      formik.values.images.map((file, index) => (
        <div key={index} className="relative border rounded-md overflow-hidden">
          <img
            src={URL.createObjectURL(file)}
            alt={`Preview ${index + 1}`}
            className="w-full h-32 object-cover"
          />
          <button
            type="button"
            onClick={() => {
              const newImages = [...formik.values.images];
              newImages.splice(index, 1);
              formik.setFieldValue("images", newImages);
            }}
            className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full"
          >
            ✕
          </button>
        </div>
      ))}

    {formik.values.images.length < 2 && (
      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-32 cursor-pointer hover:bg-gray-100">
        <span className="text-gray-400 text-sm">Click to upload</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.currentTarget.files?.[0];
            if (!file) return;
            const newImages = [...formik.values.images, file];
            if (newImages.length <= 2) {
              formik.setFieldValue("images", newImages);
            }
          }}
        />
      </label>
    )}
  </div>

  {/* {formik.touched.images && formik.errors.images && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.images}</p>
  )} */}
</div>


        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
 