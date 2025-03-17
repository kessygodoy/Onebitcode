import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Theme appearance='dark'>
          {children}
        </Theme>


      </body>
    </html>
  );
}
