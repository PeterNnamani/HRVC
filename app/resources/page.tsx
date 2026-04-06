'use client';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ShoppingCart, Star, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  sale?: boolean;
}

export default function ResourcesPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch products from JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to load products:", error);
        // Fallback in case JSON fails
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, change: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const categories = ["All", "T-Shirts", "Caps", "Hoodies", "Accessories"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl">Loading products...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[#0f172a] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold">Shop</h1>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full text-sm">
            Home <span className="text-orange-400">»</span> Resources
          </div>
          <p className="mt-6 max-w-md mx-auto text-lg opacity-90">
            Wear your values. Every purchase supports human rights advocacy and legal aid in Nigeria.
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-10 py-6 text-sm font-medium">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-1 transition-all border-b-2 whitespace-nowrap ${
                  activeCategory === cat 
                    ? "border-orange-500 text-orange-600" 
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute top-4 right-4 bg-white shadow-md px-4 py-1.5 rounded-2xl font-semibold text-orange-600">
                  ₦{product.price.toLocaleString()}
                </div>

                {product.sale && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-2xl">SALE</div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg leading-tight mb-3 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center gap-1 text-orange-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < product.rating ? "currentColor" : "none"} />
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-medium transition-all active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden">
            <div className="p-8">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={500}
                height={500}
                className="rounded-2xl w-full"
              />
              <h2 className="text-3xl font-bold mt-6 mb-2">{selectedProduct.name}</h2>
              <p className="text-4xl font-bold text-orange-600">₦{selectedProduct.price.toLocaleString()}</p>
              
              <p className="mt-6 text-gray-600">
                Premium quality custom apparel. 100% of profits support HRVC’s mission to protect human rights and provide legal aid across Nigeria.
              </p>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="flex-1 bg-orange-500 text-white py-4 rounded-2xl font-semibold hover:bg-orange-600 transition-all"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 border border-gray-300 py-4 rounded-2xl font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Cart Button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed bottom-8 right-8 bg-orange-500 text-white w-16 h-16 rounded-3xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <ShoppingCart size={28} />
        {cart.length > 0 && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-7 h-7 rounded-2xl flex items-center justify-center">
            {cart.length}
          </div>
        )}
      </button>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex justify-end">
          <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Cart</h2>
              <button onClick={() => setCartOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 p-6 overflow-auto space-y-6">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-12">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <Image src={item.image} alt="" width={80} height={80} className="rounded-2xl" />
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-orange-600">₦{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 border rounded-xl">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 border rounded-xl">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-sm">Remove</button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t">
                <div className="flex justify-between text-xl font-bold mb-6">
                  <span>Total</span>
                  <span>₦{total.toLocaleString()}</span>
                </div>
                <button className="w-full bg-orange-500 text-white py-4 rounded-3xl font-semibold text-lg">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}