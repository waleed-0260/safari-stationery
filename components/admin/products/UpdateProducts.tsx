"use client"
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from 'react-select';
import { Button } from "@/components/ui/button";
import { Editor } from 'primereact/editor';



type CategoryOption = {
  value: string;
  label: string;
};

interface FormValues {
  title: string;
  description: string;
  // price: string;
  // compare_at_price: string;
  category: string[];           // ✅ string array
  sub_category: string[];
  stock: string;
  isFeatured: string;
  images: File[];
  colors: string[];
    sets: { set: string; price: number; compare_at_price: number, size: string }[];
}
const UpdateProducts = ({data, id}:any) => {


      const [loading, setLoading] = useState(false);
    
      const categoryOptions = [
        { value: 'Sale', label: 'Sale' },
        { value: 'Deals', label: 'Deals' },
        { value: 'Study Essentials', label: 'Study Essentials' },
        { value: 'School Supplies', label: 'School Supplies' },
        { value: 'Art Supplies', label: 'Art Supplies' },
        { value: 'Party Supplies', label: 'Party Supplies' },
        { value: 'Toys', label: 'Toys' },
        { value: 'Trending', label: 'Trending' },
      ];
    
      const subCategoryMap = {
      "Study Essentials": [
           { value: "Pens", label: "Pens" },
        { value: "Pointers", label: "Pointers" },
        { value: "Pencils", label: "Pencils" },
        { value: "Markers", label: "Markers" },
        { value: "Highlighters", label: "Highlighters" },
        { value: "Correction Pen/Tape", label: "Correction Pen/Tape" },
        { value: "Eraser", label: "Eraser" },
        { value: "Sharpener", label: "Sharpener" },
        { value: "Ruler/Scale", label: "Ruler/Scale" },
        { value: "Thumbpins/Paper Clips", label: "Thumbpins/Paper Clips" },
        { value: "Sticky Notes", label: "Sticky Notes" },
        { value: "Stapler", label: "Stapler" },
        { value: "Journals", label: "Journals" },
        { value: "Registers", label: "Regsiters" },
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
          { value: "Bags", label: "Bags" },
        { value: "Pouches", label: "Pouches" },
        { value: "Lunch Box", label: "Lunch Box" },
        { value: "Water Bottle", label: "Water Bottle" },
      ],
    };
    
    const colorsOptions = [
      { value: "Red", label: "Red" },
      { value: "Green", label: "Green" },
      { value: "Blue", label: "Blue" },
      { value: "Yellow", label: "Yellow" },
      { value: "Purple", label: "Purple" },
      { value: "Cyan", label: "Cyan" },
      { value: "Orange", label: "Orange" },
      { value: "Pink", label: "Pink" },
      { value: "Teal", label: "Teal" },
      { value: "Brown", label: "Brown" },
      { value: "Black", label: "Black" },
      { value: "white", label: "white" }
    ];

    const Category = data.category.map((item:any)=> item)
    const SubCategory = data.sub_category.map((item:any)=> item)
    const colors = data.colors.map((item:any)=> item)
    const images = data.images.map((item:any)=> item)
    
      const formik = useFormik<FormValues>({
        initialValues: {
          title: data.title,
          description: data.description,
          // price: data.price,
          // compare_at_price: data.compare_at_price,
          category: Category,
          sub_category: SubCategory,
          colors: colors,
          stock: data.stock,
          isFeatured: data.isFeatured,
          images: images,
              sets: data.sets || [{ set: "", price: 0, compare_at_price: 0, size:"" }],

        },
        validationSchema: Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
          // price: Yup.number().required("Price is required"),
          // compare_at_price: Yup.number(),
          category: Yup.array().min(1, "Select at least one category"),
          sub_category: Yup.array().min(1, "Select at least one sub category"),
          stock: Yup.number().required("Stock is required"),
          isFeatured: Yup.string().required("Please choose an option"),
          colors: Yup.array().min(1, "select atleast"),
            sets: Yup.array().of(
    Yup.object().shape({
      set: Yup.string(),
      price: Yup.number().required("Price is required"),
      compare_at_price: Yup.number(),
      size:Yup.string()
    })
  ),
          images: Yup.array()
          .min(2, "Please upload 2 images")
            .max(6, "Only 6 images are allowed"),
          }),
          onSubmit: async (values) => {
            console.log("kjsnfk")
          setLoading(true);
          try {
            const formData = new FormData();
    
            // formData.append("price", values.price);
            // formData.append("compare_at_price", values.compare_at_price);
            formData.append("title", values.title);
            formData.append("description", values.description);
            formData.append("stock", values.stock);
            formData.append("isFeatured", values.isFeatured);
            formData.append("category", JSON.stringify(values.category));
            formData.append("sub_category", JSON.stringify(values.sub_category));
            formData.append("colors", JSON.stringify(values.colors));
        formData.append("sets", JSON.stringify(values.sets));

    
            values.images.forEach((file: File) => {
              formData.append("images", file);
            });
    
            const res = await fetch(`/api/products/${id}`, {
              method: "PATCH",
              body: formData,
            });
    
            const data = await res.json();
            if (data.success) {
              alert("Product Updated  successfully!");
              formik.resetForm();
              setLoading(false);
            } else {
              alert("Failed to add product.");
              setLoading(false);
            }
          } catch (error) {
              setLoading(false);
            console.error("Error uploading product:", error);
            alert("Something went wrong.");
          }
        },
      });
    
    const subCategoryOptions =
      formik.values.category.length > 0
        ? formik.values.category.flatMap((cat) =>
            subCategoryMap[cat as keyof typeof subCategoryMap] || []
          )
        : [];
        // console.log("loas", loading)


  return (
    <div>
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
       <div>
  <label className="block mb-1 font-medium text-gray-700">Sets & Prices</label>

  {formik.values.sets.map((item, index) => (
    <div key={index} className="border p-3 rounded-md mb-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Set (e.g. 12)</label>
          <input
            type="text"
            placeholder="12, 24, etc."
            value={item.set}
            onChange={(e) => {
              const updated = [...formik.values.sets];
              updated[index].set = e.target.value;
              formik.setFieldValue("sets", updated);
            }}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Price (Rs)</label>
          <input
            type="number"
            placeholder="Price"
            value={item.price || ""}
            onChange={(e) => {
              const updated = [...formik.values.sets];
              updated[index].price = parseFloat(e.target.value);
              formik.setFieldValue("sets", updated);
            }}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Compare Price (Rs)</label>
          <input
            type="number"
            placeholder="Compare_at_price"
            value={item.compare_at_price || ""}
            onChange={(e) => {
              const updated = [...formik.values.sets];
              updated[index].compare_at_price = parseFloat(e.target.value);
              formik.setFieldValue("sets", updated);
            }}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Size</label>
          <input
            type="text"
            placeholder="Size"
            value={item.size || ""}
            onChange={(e) => {
              const updated = [...formik.values.sets];
              updated[index].size = e.target.value;
              formik.setFieldValue("sets", updated);
            }}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <button
          type="button"
          onClick={() => {
            const updated = [...formik.values.sets];
            updated.splice(index, 1);
            formik.setFieldValue("sets", updated);
          }}
          className="text-red-600 font-bold text-sm"
        >
          × Remove
        </button>
      </div>
    </div>
  ))}

  <Button
    type="button"
    onClick={() =>
      formik.setFieldValue("sets", [
        ...formik.values.sets,
        { set: "", price: 0, compare_at_price: 0, size:"" },
      ])
    }
    className="cursor-pointer"
  >
    + Add Another Set
  </Button>

  {formik.touched.sets && typeof formik.errors.sets === "string" && (
    <p className="text-red-500 text-sm mt-1">{formik.errors.sets}</p>
  )}
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
  isDisabled={!formik.values.category.length}
  value={subCategoryOptions.find(
    (opt: any) => opt.value === formik.values.sub_category
  )}
  onChange={(selected) => {
    formik.setFieldValue(
      "sub_category",
      selected ? selected.map((item: any) => item.value) : []
    );
  }}
  isMulti
/>
            {formik.touched.sub_category && formik.errors.sub_category && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.sub_category}</p>
            )}
          </div>
           <div>
            <label className="block mb-1 font-medium text-gray-700">Colors</label>
            <Select
  isMulti
  name="colors"
  options={colorsOptions}
  className="basic-multi-select"
  classNamePrefix="select"
value={colorsOptions.filter(option => formik.values.colors.includes(option.value))}
  onChange={(selected) =>
    formik.setFieldValue("colors", selected.map((item) => item.value))
  }
/>

            {formik.touched.colors && formik.errors.colors && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.colors}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Description</label>
          
          <Editor value={formik.values.description}
                  onTextChange={(e: any) =>
                    formik.setFieldValue("description", e.htmlValue)
                  }
                  onBlur={() => formik.setFieldTouched("description", true)}
                  style={{ height: "200px" }}/>
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
    Upload 4 Images
  </label>

  <div className="grid grid-cols-2 gap-4">
    {formik.values.images.length > 0 &&
      formik.values.images.map((file, index) => (
  <div key={index} className="relative border rounded-md overflow-hidden">
    <img
      src={typeof file === "string" ? file : URL.createObjectURL(file)}
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

    {formik.values.images.length < 6 && (
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
            if (newImages.length <= 4) {
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
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
          disabled={loading}
        >
          {/* Submit */}
          {loading ? "Updatig product please wait...": "Submit"}
        </button>
      </form>
    </div>
    </div>
  )
}

export default UpdateProducts