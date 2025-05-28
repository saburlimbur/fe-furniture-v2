import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function FaqSection() {
  const faqData = [
    {
      question: 'Bagaimana cara memesan produk di website ini?',
      answer:
        'Pilih produk yang Anda inginkan, klik "Tambah ke Keranjang", lalu lanjutkan ke halaman checkout untuk menyelesaikan pembayaran.',
    },
    {
      question: 'Apakah produk bisa dikirim ke seluruh Indonesia?',
      answer:
        'Ya, kami melayani pengiriman ke seluruh wilayah Indonesia melalui jasa ekspedisi terpercaya.',
    },
    {
      question: 'Berapa lama waktu pengiriman?',
      answer:
        'Pengiriman umumnya memakan waktu 2–7 hari kerja, tergantung lokasi dan ketersediaan produk.',
    },
    {
      question: 'Apakah saya bisa mengembalikan barang jika rusak?',
      answer:
        'Bisa. Kami menerima retur dalam waktu 7 hari sejak barang diterima, selama barang belum digunakan dan masih dalam kemasan asli.',
    },
    {
      question: 'Apakah ada layanan pemasangan furniture?',
      answer:
        'Ya, kami menyediakan jasa perakitan untuk area tertentu. Silakan pilih layanan ini saat checkout atau hubungi customer service kami.',
    },
  ];

  return (
    <div className="w-full max-w-9xl mx-auto px-4 py-8">
      <Card className="shadow-none border-gray-100">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
            Frequently Asked Questions
          </CardTitle>
          <p className="text-gray-600 text-lg">
            Simulacra Studio - Premium Furniture Collection
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="cursor-pointer border border-gray-100 rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-gray-900 py-4 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

export default FaqSection;
