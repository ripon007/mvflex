import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MVFLEX - Home',
  description: 'Building the Future with Excellence',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1>Welcome to MVFLEX</h1>
      <p>Construction Company Website</p>
    </main>
  );
}
