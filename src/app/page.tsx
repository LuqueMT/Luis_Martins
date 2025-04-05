'use client'
import React from 'react';
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar"
import Main from '@/components/Main/page';
import "@/app/page.css";

export default function Home() {
  return (
    <div className="body">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}