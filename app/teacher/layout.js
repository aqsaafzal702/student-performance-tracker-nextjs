import '../globals.css';

export const metadata = {
  title: "Student Performance Tracker",
  description: "Dashboard and announcements management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">{children}</body>
    </html>
  );
}
