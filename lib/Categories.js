
import {
  FaTags,         // Sale
  FaGift,         // Deals
  FaPencilAlt,    // Study Essentials
  FaSchool,       // School Supplies
  FaPaintBrush,   // Art Supplies
  FaBirthdayCake, // Party Supplies
  FaPuzzlePiece,  // Toys
  FaFire          // Trending (🔥 alternative)
} from "react-icons/fa";

export const categoryOptions = [
  // { value: 'Sale', label: 'Sale', icon: <FaTags /> },
  { value: 'Deals', label: 'Deals', icon: <FaGift /> },
  { value: 'Study Essentials', label: 'Study Essentials', icon: <FaPencilAlt /> },
  { value: 'School Supplies', label: 'School Supplies', icon: <FaSchool /> },
  { value: 'Art Supplies', label: 'Art Supplies', icon: <FaPaintBrush /> },
  { value: 'Party Supplies', label: 'Party Supplies', icon: <FaBirthdayCake /> },
{ value: 'Journals', label: 'Journals', icon: <FaPaintBrush /> },
  { value: 'Toys', label: 'Toys', icon: <FaPuzzlePiece /> },
  { value: 'Trending', label: 'Trending', icon: <FaFire /> },
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
   "Journals": [
      { value: "Cute Journals", label: "Cute Journals" },
    { value: "Ring Journals", label: "Ring Journals" },
    { value: "Mini Diaries", label: "Mini Diaries" },
    { value: "Journal Kits", label: "Journal Kits" },
    { value: "Hard Cover Diary", label: "Hard Cover Diary" },
  ],
};