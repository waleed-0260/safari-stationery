"use client";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Search } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import { GetProductsBySearch } from "@/lib/GetProducts";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchProducts = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      if (query.trim().length === 0) {
        setResults([]);
        return;
      }

      setLoading(true);
      const data = await GetProductsBySearch(query);
      setResults(data);
      setLoading(false);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const handleProductClick = (id: string) => {
    setOpen(false); // Close the sheet
    router.push(`/products/${id}`); // Navigate to product page
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <p className="text-3xl cursor-pointer">
          <IoSearch />
        </p>
      </SheetTrigger>
      <SheetContent className="bg-[#E6DAF0]">
        <SheetHeader>
          <SheetTitle>
            <div className="relative w-full max-w-sm mt-[20px]">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <Search className="text-gray-500" />
              </div>
            </div>
          </SheetTitle>
          <div className="mt-[20px]">
            {loading ? (
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : (
              <ul className="mt-4 space-y-2 overflow-y-scroll">
                {results.map((product) => (
                  <li
                    key={product._id}
                    onClick={() => handleProductClick(product._id)}
                    className="border-b pb-2 flex flex-row gap-3 cursor-pointer"
                  >
                    <div>
                      <img
                        src={product.images[0]}
                        alt=""
                        className="rounded-full h-[50px] w-[50px]"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{product.title}</p>
                      <p className="text-sm text-gray-600">
                        {product.category}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SearchProducts;
