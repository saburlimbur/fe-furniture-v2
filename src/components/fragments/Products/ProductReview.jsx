import { Star, ThumbsDown, ThumbsUp, Verified } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export default function ProductReview() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: '/placeholder-user.jpg',
      rating: 5,
      date: '2 weeks ago',
      verified: true,
      title: 'Excellent quality and comfort!',
      content:
        "I absolutely love this sofa! The quality is outstanding and it's incredibly comfortable. The fabric feels premium and the cushions maintain their shape even after daily use. Assembly was straightforward and the delivery was prompt. Highly recommend!",
      helpful: 24,
      notHelpful: 2,
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: '/placeholder-user.jpg',
      rating: 4,
      date: '1 month ago',
      verified: true,
      title: 'Great value for money',
      content:
        "Really happy with this purchase. The sofa looks exactly like the pictures and fits perfectly in my living room. The only minor issue is that it took a bit longer to break in than expected, but now it's very comfortable. Good customer service too.",
      helpful: 18,
      notHelpful: 1,
    },
  ];

  const overallRating = 4.3;
  const totalReviews = 127;
  const ratingDistribution = [
    { stars: 5, count: 68, percentage: 54 },
    { stars: 4, count: 32, percentage: 25 },
    { stars: 3, count: 19, percentage: 15 },
    { stars: 2, count: 5, percentage: 4 },
    { stars: 1, count: 3, percentage: 2 },
  ];

  const renderStars = (rating, size = 'w-4 h-4') => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${size} ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
      />
    ));
  };

  return (
    <div className="w-full p-6 space-y-8">
      <Separator />
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Customer Reviews</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold">{overallRating}</div>
              <div className="flex justify-center">
                {renderStars(Math.round(overallRating), 'w-5 h-5')}
              </div>
              <p className="text-muted-foreground">
                Based on {totalReviews} reviews
              </p>
            </div>

            <div className="space-y-2">
              {ratingDistribution.map(item => (
                <div key={item.stars} className="flex items-center gap-2">
                  <span className="text-sm w-6">{item.stars}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <Progress value={item.percentage} className="flex-1 h-2" />
                  <span className="text-sm text-muted-foreground w-8">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Reviews ({totalReviews})</h3>
          <Button variant="outline">Write a Review</Button>
        </div>

        {reviews.map((review, index) => (
          <div key={review.id}>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={review.avatar || '/placeholder.svg'}
                          alt={review.name}
                        />
                        <AvatarFallback>
                          {review.name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{review.name}</h4>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Verified className="w-3 h-3 mr-1" />
                              Verified Purchase
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium">{review.title}</h5>
                    <p className="text-muted-foreground leading-relaxed">
                      {review.content}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-sm text-muted-foreground">
                      Was this helpful?
                    </span>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Yes ({review.helpful})
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <ThumbsDown className="w-4 h-4 mr-1" />
                        No ({review.notHelpful})
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {index < reviews.length - 1 && <Separator className="my-6" />}
          </div>
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
