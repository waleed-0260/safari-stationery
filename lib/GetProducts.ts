export async function GetProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products`, {
      next: { revalidate: 60 }, // optional: ISR caching
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to fetch');

    return json.data;
  } catch (err) {
    console.error("❌ Error in getProducts:", err);
    return [];
  }
}

export async function GetProductsById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${id}`, {
      next: { revalidate: 60 },
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to fetch product');

    return json.data;
  } catch (err) {
    console.error(`❌ Error in SingleProduct (id: ${id}):`, err);
    return null;
  }
}

export async function GetProductsByCategory(category: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/category/${category}`, {
      next: { revalidate: 60 },
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to fetch products by category');

    return json.data;
  } catch (err) {
    console.error(`❌ Error in GetProductsByCategory (${category}):`, err);
    return [];
  }
}

export async function GetProductsBySubCategory(SubCategory: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/sub-category/${SubCategory}`, {
      next: { revalidate: 60 },
    });

    const json = await res.json();

    // if (!res.ok) throw new Error(json.message || 'Failed to fetch products by category');

    return json.data;
  } catch (err) {
    console.error(`❌ Error in GetProductsByCategory (${SubCategory}):`, err);
    return [];
  }
}