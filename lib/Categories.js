
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
  {
    value: 'Sale',
    label: 'Sale',
    icon: <FaTags className="mr" />
  },
  {
    value: 'Deals',
    label: 'Deals',
    icon: <FaGift className="mr-1" />
  },
  {
    value: 'Daily Stationery',
    label: 'Daily Stationery',
    icon: <FaPencilAlt className="mr-1" />
  },
  {
    value: 'School Supplies',
    label: 'School Supplies',
    icon: <FaSchool className="mr-1 " />
  },
  {
    value: 'Art Supplies',
    label: 'Art Supplies',
    icon: <FaPaintBrush className="mr-1 " />
  },
  {
    value: 'Party Supplies',
    label: 'Party Supplies',
    icon: <FaBirthdayCake className="mr-1" />
  },
  {
    value: 'Toys',
    label: 'Toys',
    icon: <FaPuzzlePiece className="mr-1 " />
  }
];

  const subCategoryMap = {
  "Fine Arts": [
    { value: "Painting", label: "Painting" },
    { value: "Sculpture", label: "Sculpture" },
  ],
  "School Supplies": [
    { value: "Notebooks", label: "Notebooks" },
    { value: "Pencils", label: "Pencils" },
  ],
  "Cute Stationery": [
    { value: "Stickers", label: "Stickers" },
    { value: "Washi Tape", label: "Washi Tape" },
  ],
  "Office Supplies": [
    { value: "Files", label: "Files" },
    { value: "Staplers", label: "Staplers" },
  ],
};