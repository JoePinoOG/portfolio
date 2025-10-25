import './globals.css';
import AnimatedBackground from './components/AnimatedBackground';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#17171B] text-[#EBEBEC] min-h-screen">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
