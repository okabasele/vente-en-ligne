import React, { useState, useEffect } from 'react'
import { Product,Size,Color,Category,TypeClothes } from '../pages';
import { useSupabase } from './useSupabase'

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [size, setSize] = useState<Size[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [typeClothes, setTypeClothes] = useState<TypeClothes[]>([]);

  const supabaseClient = useSupabase();

  useEffect(() => {
    const fetchProductsWithColorsAndCategoriesAndClothesTypes = async () => {
      const productPromise = supabaseClient.from("Product").select("*")
      const sizesPromise = supabaseClient.from("Size").select("id, name")
      const colorPromise = supabaseClient.from("Color").select("id, name")
      const typePromise = supabaseClient.from("Type").select("id, name, categoryID")
      const categoryPromise = supabaseClient.from("Category").select("id, name")
      
      const [
        fetchedProducts,
        fetchedSizes,
        fetchedColors,
        fetchedTypeClothes,
        fetchedCategories
      ] = await Promise.all([productPromise, sizesPromise, colorPromise, typePromise, categoryPromise])
  
      const productsToSave = fetchedProducts.data?.map((product) => {
        const typeProd = (fetchedTypeClothes.data || []).find((e) => e.id === product.typeID);
          
        const colorProd = (fetchedColors.data || []).find((e) => e.id === product.colorID);
        const categoryProd = (fetchedCategories.data || []).find(
          (e) => e.id === typeProd?.categoryID
        );
        
        return {
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          image: product.image,
          type: typeProd?.name || "",
          category: categoryProd?.name || "",
          color: colorProd?.name || "",
        }
      }) as Product[]

      localStorage.setItem("products", JSON.stringify(productsToSave));
        
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "");
      }

      setSize(fetchedSizes.data || []);
      setTypeClothes(fetchedTypeClothes.data || []);
      setColors(fetchedColors.data || [])
      setCategories(fetchedCategories.data || []);
      setProducts([...productsToSave])
    }
  
    fetchProductsWithColorsAndCategoriesAndClothesTypes()
  }, [])


  return {
    products,
    size,
    colors,
    typeClothes,
    categories
  }
}

export { useProducts }