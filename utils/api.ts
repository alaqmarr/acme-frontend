import axios from "axios";

const API_BASE_URL = "https://acmebackend.vercel.app/api";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  isLive: boolean;
  categoryId: string;
  subcategoryId: string | null;
  images: ProductImage[];
  category: Category;
  subcategory: Subcategory | null;
}

export interface ProductImage {
  id: string;
  url: string;
  productId: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  imageUrl: string | null;
  description: string | null;
  subcategories: Subcategory[];
  products: Product[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  categoryId: string;
  imageUrl: string | null;
}

interface Brand {
  id: number;
  name: string;
  image: string;
  width?: number; // Optional width for the logo
  height?: number; // Optional height for the logo
}
// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch all categories with subcategories
export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

// Fetch all brands
export const fetchBrands = async (): Promise<Brand[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/brands`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

// Fetch single product by slug
export const fetchProductBySlug = async (slug: string): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${slug}`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error);
    throw error;
  }
};

// Fetch single category by slug with products and subcategories
export const fetchCategoryBySlug = async (slug: string): Promise<Category> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${slug}`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching category with slug ${slug}:`, error);
    throw error;
  }
};

// Fetch products by subcategory
export const fetchProductsBySubcategory = async (
  categorySlug: string,
  subcategorySlug: string
): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/subcategories/${subcategorySlug}`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(
      `Error fetching products for subcategory ${subcategorySlug}:`,
      error
    );
    throw error;
  }
};

// Fetch single product by ID
export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

// Fetch single category by ID with products and subcategories
export const fetchCategoryById = async (id: string): Promise<Category> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching category with ID ${id}:`, error);
    throw error;
  }
};

// Fetch products by subcategory ID
export const fetchProductsBySubcategoryId = async (
  categoryId: string,
  subcategoryId: string
): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/subcategories`, {
      method: "GET",
      headers: {
      "Cache-Control": "no-cache",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(
      `Error fetching products for subcategory ID ${subcategoryId}:`,
      error
    );
    throw error;
  }
};
