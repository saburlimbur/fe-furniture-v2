import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCreateAddress from '@/hooks/address/useCreateAddress';
import addressSchema from '@/schema/AddressSchema';

const countries = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AU', label: 'Australia' },
  { value: 'DE', label: 'Germany' },
  { value: 'FR', label: 'France' },
  { value: 'JP', label: 'Japan' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'SG', label: 'Singapore' },
  { value: 'MY', label: 'Malaysia' },
];

function AddressForm() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { createAddress } = useCreateAddress();

  const user = JSON.parse(localStorage.getItem('furniture_user'));
  const userId = user?.id;

  const formik = useFormik({
    initialValues: {
      street: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
    },
    validationSchema: addressSchema,
    onSubmit: async values => {
      const payload = {
        user_id: userId,
        ...values,
      };

      setLoading(true);
      try {
        await createAddress(payload);
        localStorage.setItem('address_data', JSON.stringify(payload));
        setIsSubmitted(true); // agar readonly input nya
      } catch (err) {
        console.error('Create address error:', err);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    const saved = localStorage.getItem('address_data');
    if (saved) {
      const data = JSON.parse(saved);
      formik.setValues(data);
      setIsSubmitted(true);
    }
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Address Information</CardTitle>
          <CardDescription>
            Please fill out your full address details below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={user?.name || ''}
                  readOnly
                  className="cursor-not-allowed px-3 py-5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  value={user?.email || ''}
                  readOnly
                  className="cursor-not-allowed px-3 py-5"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                name="street"
                placeholder="Enter street address"
                value={formik.values.street}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                readOnly={isSubmitted}
                className={`block w-full px-3 py-5 border rounded-lg text-xs shadow-sm ${
                  formik.errors.street && formik.touched.street
                    ? 'ring-2 ring-red-500'
                    : ''
                } ${isSubmitted ? 'cursor-not-allowed' : ''}`}
              />
              {formik.errors.street && formik.touched.street && (
                <small className="text-red-500 text-xs">
                  {formik.errors.street}
                </small>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Enter city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  readOnly={isSubmitted}
                  className={`block w-full px-3 py-5 border rounded-lg text-xs shadow-sm ${
                    formik.errors.city && formik.touched.city
                      ? 'ring-2 ring-red-500'
                      : ''
                  } ${isSubmitted ? 'cursor-not-allowed' : ''}`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State / Province</Label>
                <Input
                  id="state"
                  name="state"
                  placeholder="Enter state or province"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  readOnly={isSubmitted}
                  className={`block w-full px-3 py-5 border rounded-lg text-xs shadow-sm ${
                    formik.errors.state && formik.touched.state
                      ? 'ring-2 ring-red-500'
                      : ''
                  } ${isSubmitted ? 'cursor-not-allowed' : ''}`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postal_code">Postal Code</Label>
                <Input
                  id="postal_code"
                  name="postal_code"
                  placeholder="Enter postal code"
                  value={formik.values.postal_code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  readOnly={isSubmitted}
                  className={`block w-full px-3 py-5 border rounded-lg text-xs shadow-sm ${
                    formik.errors.postal_code && formik.touched.postal_code
                      ? 'ring-2 ring-red-500'
                      : ''
                  } ${isSubmitted ? 'cursor-not-allowed' : ''}`}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Select
                  disabled={isSubmitted}
                  value={formik.values.country}
                  onValueChange={value =>
                    formik.setFieldValue('country', value)
                  }
                >
                  <SelectTrigger
                    className={`w-full px-3 py-5 border rounded-lg text-xs shadow-sm ${
                      formik.errors.country && formik.touched.country
                        ? 'ring-2 ring-red-500'
                        : ''
                    } ${isSubmitted ? 'cursor-not-allowed' : ''}`}
                  >
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1"
                size="lg"
                disabled={loading || isSubmitted}
              >
                {loading
                  ? 'Saving...'
                  : isSubmitted
                    ? 'Update Address'
                    : 'Save Address'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  formik.resetForm();
                  localStorage.removeItem('address_data');
                  setIsSubmitted(false);
                }}
                className="flex-1"
                size="lg"
              >
                Reset Form
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddressForm;
