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

export async function GetProductsBySearch(query: string) {
    try {
      console.log("query", query)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/search?q=${query}`, {
      next: { revalidate: 60 },
    });

    const json = await res.json();

    // if (!res.ok) throw new Error(json.message || 'Failed to fetch products by category');

    return json.data;
  } catch (err) {
    console.error(`❌ Error in GetProductsByCategory (${query}):`, err);
    return [];
  }
}

export async function GetCartProducts() {
    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cart`, {
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

export async function DeleteProductById(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${id}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to delete product');

    return json.data; // or true if deletion successful
  } catch (err) {
    console.error(`❌ Error deleting product (id: ${id}):`, err);
    return null;
  }
}


export async function UpdateProductById(id: string, payload: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to update product');

    return json.data;
  } catch (err) {
    console.error(`❌ Error updating product (id: ${id}):`, err);
    return null;
  }
}

export async function GetCartById(id: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cart/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to update product');

    return json.data;
  } catch (err) {
    console.error(`❌ Error updating product (id: ${id}):`, err);
    return null;
  }
}

export async function UpdateCartItemByUserId(userId: string, payload: { productId: string; quantity: number }) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/cart/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log("res", res)
    
    const json = await res.json();

    if (!res.ok) throw new Error(json.message || 'Failed to update cart item');

    return json; // return whole response if you want message etc.
  } catch (err) {
    console.error(`❌ Error updating cart item (userId: ${userId}):`, err);
    return null;
  }
}
