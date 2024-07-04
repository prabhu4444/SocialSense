import "./globals.css";
import Header from '@/components/Header';
import ClientProvider from '@/lib/ClientProvider';



export const metadata = {
  title: "SocialSense_Task",
  description: "SocialSense_Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main >
        <ClientProvider>
          {children}
        </ClientProvider>
        </main>
      </body>
    </html>
  );
}
