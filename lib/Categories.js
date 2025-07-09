
import {
  FaTags,        // Sale
  FaGift,        // Deals
  FaPencilAlt,   // Daily Stationery
  FaSchool,      // School Supplies
  FaPaintBrush,  // Art Supplies
  FaBirthdayCake,// Party Supplies
  FaPuzzlePiece  // Toys
} from "react-icons/fa";


export const categoryOptions = [
    { value: 'Sale', label: 'Sale' },
    { value: 'Deals', label: 'Deals' },
    { value: 'Study Essentials', label: 'Study Essentials' },
    { value: 'School Supplies', label: 'School Supplies' },
    { value: 'Art Supplies', label: 'Art Supplies' },
    { value: 'Party Supplies', label: 'Party Supplies' },
    { value: 'Toys', label: 'Toys' },
    { value: 'Trending', label: 'Trending' },
  ];

export const subCategoryMap = {
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