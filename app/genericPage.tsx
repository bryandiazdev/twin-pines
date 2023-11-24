// app/page.tsx
import React from 'react';
import Layout from './layout';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface PageProps {
  title: string;
  children: React.ReactNode;
  // Add any other props you may need for your pages
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <div>
        {/* <h1>{title}</h1> */}
        <div>{children}</div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Page;
