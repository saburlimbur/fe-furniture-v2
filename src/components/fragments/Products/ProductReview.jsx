/* eslint-disable camelcase */
import { useState } from 'react';
import { Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import useCreateReview from '@/hooks/reviews/useCreateReview';
import useGetReviewByProduct from '@/hooks/reviews/useGetReviewByProduct';

export default function ProductReview({ productId }) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);

  const { createReview } = useCreateReview();
  const {
    data: reviewProduct = [],
    isLoading,
    isError,
    refetch,
  } = useGetReviewByProduct(productId);

  const renderStars = (rating, size = 'w-4 h-4') => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        onClick={() => setSelectedRating(i + 1)}
        className={`${size} cursor-pointer ${
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-300'
        }`}
      />
    ));
  };

  const handleSubmitReview = async () => {
    const userData = JSON.parse(localStorage.getItem('furniture_user'));
    try {
      await createReview({
        user_id: userData?.id,
        product_id: productId,
        rating: selectedRating,
        review_content: reviewText,
      });

      setReviewText('');
      setSelectedRating(0);
      setShowReviewForm(false);

      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelReview = () => {
    setShowReviewForm(false);
    setReviewText('');
    setSelectedRating(0);
  };

  return (
    <div className="w-full p-6 space-y-8">
      <Separator />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Reviews</h3>
          <Button
            variant="outline"
            onClick={() => setShowReviewForm(prev => !prev)}
          >
            {showReviewForm ? 'Cancel Review' : 'Write a Review'}
          </Button>
        </div>

        {showReviewForm && (
          <Card>
            <CardContent className="space-y-4 py-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-base">Your Rating</h4>
                <div className="flex">
                  {renderStars(selectedRating, 'w-6 h-6')}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-base">Your Review</h4>
                <Textarea
                  placeholder="Share your experience with this product..."
                  value={reviewText}
                  onChange={e => setReviewText(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="ghost" onClick={handleCancelReview}>
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmitReview}
                  disabled={!reviewText || selectedRating === 0}
                >
                  Submit Review
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-4">
        {isLoading && <p>Loading reviews...</p>}
        {isError && <p>Failed to load reviews.</p>}

        {!isLoading && !isError && reviewProduct.length === 0 && (
          <p className="text-gray-500 text-sm">No reviews yet.</p>
        )}

        {reviewProduct.map(review => (
          <Card key={review.id}>
            <CardContent className="py-4 space-y-2">
              <div className="flex">{renderStars(review.rating)}</div>
              <p className="text-sm text-gray-700">{review.review_content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
}
