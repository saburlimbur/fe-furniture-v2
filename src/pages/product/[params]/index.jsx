/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

import ProductItem from '@/components/fragments/Products/ProductItem';
import ProductReview from '@/components/fragments/Products/ProductReview';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import useCreateCart from '@/hooks/cart/useCreateCart';
import useCreateCartItem from '@/hooks/cartItem/useCreateCartItem';
import useGetProductById from '@/hooks/product/useGetProductById';
import { formatRp } from '@/utils/Formatted';

function ProductDetails() {
  const { id } = useParams();
  const { productId } = useGetProductById(id);
  const { createCart } = useCreateCart();
  const { createCartItem } = useCreateCartItem();
  const [cartId, setCartId] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('furniture_user'));
      const userId = user?.id;

      if (!userId) {
        toast.error('Please login to add to cart.');
        return;
      }

      let cartData = JSON.parse(localStorage.getItem('cart_data'));
      let currentCartId = cartData?.id;

      if (!currentCartId) {
        await createCart({
          user_id: userId,
          total_price: productId.price,
        });

        cartData = JSON.parse(localStorage.getItem('cart_data'));
        currentCartId = cartData?.id;

        if (!currentCartId) {
          throw new Error('Cart creation failed');
        }
      }

      await createCartItem({
        cart_id: Number(currentCartId),
        product_id: productId.id,
        quantity: 1,
        subtotal_price: productId.price,
      });

      toast.success('Product added to cart successfully!');
    } catch (error) {
      console.error('Add to cart error:', error);
      toast.error('Failed to add product to cart.');
    }
  };

  return (
    <section className="max-w-[1400px] mx-auto p-4 pt-12 min-h-screen space-y-10">
      <div className="w-full flex gap-5">
        <div className="w-1/2 flex-1">
          <div className="p-3 rounded-lg border">
            <img
              src={productId?.image_url}
              alt={productId?.name}
              className="w-full h-[500px] object-contain"
            />
          </div>
        </div>

        <div className="w-1/2 flex-1 py-3">
          <div className="flex flex-col h-full justify-between">
            <div className="pb-5 flex flex-col gap-4">
              <h1 className="text-6xl font-bold">{productId?.name}</h1>

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Rp. {formatRp(productId?.price)}
                </h3>
                <Badge variant="outline" className="text-sm">
                  In Stock: {productId?.stock}
                </Badge>
              </div>

              <Separator />

              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">Description:</p>
                <h2 className="text-lg text-gray-500">
                  {productId?.description}
                </h2>
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                className="w-[49%] py-7 cursor-pointer"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                className="w-[49%] py-7 cursor-pointer"
                variant="outline"
                onClick={() => navigate('/products')}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Related Products</h1>
          <Button variant="outline">See All</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <ProductItem />
        </div>
      </div>
      <ProductReview productId={productId?.id} />
    </section>
  );
}

export default ProductDetails;
