import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ProductCard />
    </div>
  );
}