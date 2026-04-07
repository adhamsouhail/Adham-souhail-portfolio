import './globals.css';

export const metadata = {
  metadataBase: new URL('https://prohealthy.design'),
  title: 'Pro Healthy — Digital Designer | UI/UX, Branding, Social Media',
  description:
    'Pro Healthy — Digital designer crafting UI/UX, brand identities & social media systems that help businesses grow and convert.',
  keywords: [
    'UI UX designer',
    'brand identity designer',
    'social media design',
    'digital designer Morocco',
    'portfolio',
    'Pro Healthy',
  ],
  openGraph: {
    title: 'Pro Healthy — Digital Designer | UI/UX, Branding, Social Media',
    description:
      'Pro Healthy — Digital designer crafting UI/UX, brand identities & social media systems that help businesses grow and convert.',
    type: 'website',
    images: [{ url: '/images/og-cover.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pro Healthy — Digital Designer | UI/UX, Branding, Social Media',
    description:
      'Pro Healthy — Digital designer crafting UI/UX, brand identities & social media systems that help businesses grow and convert.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Pro Healthy',
              jobTitle: 'Digital Designer',
              url: 'https://prohealthy.design',
              sameAs: [
                'https://behance.net/prohealthy',
                'https://linkedin.com/in/prohealthy',
                'https://instagram.com/prohealthy',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
