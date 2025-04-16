"use client";
import { useEffect } from "react";
import Feature from "@/components/home/Feature";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);
  return (
    <div>
      <Feature />
    </div>
  );
}
