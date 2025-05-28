import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center py-12">
      <div>
        <ShoppingCart className="w-48 h-48" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Oops! Your cart is empty
        </h2>
        <p className="text-gray-500 mt-2 max-w-[470px]">
          It looks like you haven't added any items to your cart yet. Start
          browsing out products and add some items to your cart
        </p>
      </div>
      <Separator className="w-1/2" />
      <Button size="lg" className="gap-2" onClick={() => navigate('/products')}>
        <ShoppingCart size={18} />
        Start Shopping
      </Button>
    </div>
  );
}

export default EmptyCart;
