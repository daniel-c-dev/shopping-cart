const API_URL = `https://fakestoreapi.com/products`;

const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.map((product) => ({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1,
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export default fetchProducts;
