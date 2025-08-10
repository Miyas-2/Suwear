"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Link from "next/link";

// Dummy data produk
const product = {
  brand: "Patagonia",
  name: "Patagonia Organic Cotton Oversized T-Shirt",
  price: 299000,
  status: "Baru",
  size: "M",
  images: [
    "https://cf.shopee.co.id/file/e7e4fc1cd889153622715774b0193f54",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=601",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=602",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=603",
  ],
  description:
    "Made from 100% organic cotton, this oversized t-shirt combines comfort with sustainability. Patagonia ensures water-saving techniques and natural dyes for a minimal environmental impact.",
  details: [
    { label: "Material", value: "100% Cotton" },
    { label: "Style", value: "Basic Plain T-shirt" },
    { label: "Color", value: "Faded Black" },
    { label: "Neckline", value: "Crew Neck" },
  ],
  measurements: [
    { label: "Chest (pit to pit)", value: "52 cm" },
    { label: "Length", value: "70 cm" },
    { label: "Sleeve", value: "20 cm" },
    { label: "Shoulder Width", value: "45 cm" },
  ],
  condition: [
    "Pre-owned with minimal signs of wear:",
    "Slight fading from washing, common for black garments",
    "No holes, stains, or damage",
    "Gentle pilling in some areas, minimal and not noticeable when worn",
    "Original shape well maintained",
  ],
  care: [
    "Machine wash cold with similar colors",
    "Gentle cycle recommended",
    "Do not bleach",
    "Tumble dry low or hang to dry",
    "Iron on low heat if needed",
  ],
  shipping: [
    {
      label: "Free Shipping",
      value:
        "Estimated delivery: 2-3 days (Jabodetabek), 3-5 days (rest of Indonesia)",
    },
    {
      label: "7-Day Inspection Period",
      value:
        "All items can be returned if condition differs substantially from description",
    },
  ],
  seller: {
    name: "Jonathan Smith",
    joined: "Jan 2022",
    feedback: "98% Positive Feedback",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    profileUrl: "#",
  },
};

export default function ProductDetailPage() {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <div className="container mx-auto py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
        <Link href="/" className="hover:underline">
          Back
        </Link>
        <span>/</span>
        <Link href="/explore" className="hover:underline">
          Explore
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Images */}
        <div className="flex flex-col gap-4 w-full lg:w-[420px]">
          <Card className="rounded-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full aspect-square bg-muted">
                <Image
                  src={product.images[selectedImg]}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
                <Badge className="absolute top-2 right-2">2D</Badge>
              </div>
            </CardContent>
          </Card>
          <div className="flex gap-2">
            {product.images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setSelectedImg(idx)}
                className={`border rounded-lg overflow-hidden w-16 h-16 flex items-center justify-center ${
                  selectedImg === idx
                    ? "border-primary ring-2 ring-primary"
                    : "border-muted"
                }`}
                aria-label={`Preview ${idx + 1}`}
                type="button"
              >
                <Image
                  src={img}
                  alt={`Preview ${idx + 1}`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Right: Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-muted-foreground">{product.brand}</span>
            <Badge variant="outline" className="ml-2">
              {product.status}
            </Badge>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {product.name}
          </h1>
          <div className="text-xl font-semibold mb-2 text-primary">
            Rp {product.price.toLocaleString("id-ID")}
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">Size</span>
            <span className="font-medium">{product.size}</span>
          </div>
          <div className="flex gap-2 mb-6">
            <Button className="w-40">Add to Cart</Button>
            <Button variant="outline" className="w-40">
              Make an Offer
            </Button>
          </div>
          {/* Description */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Product Description</h2>
            <p className="text-sm text-foreground">{product.description}</p>
          </div>
          {/* Item Details */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Item Details</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
              {product.details.map((d) => (
                <div key={d.label} className="flex gap-2">
                  <span className="text-muted-foreground w-24">{d.label}</span>
                  <span className="font-medium">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Measurements */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Measurements</h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
              {product.measurements.map((m) => (
                <div key={m.label} className="flex gap-2">
                  <span className="text-muted-foreground w-32">{m.label}</span>
                  <span className="font-medium">{m.value}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Measurements taken with item laid flat. Please check carefully
              against your own measurements.
            </p>
          </div>
          {/* Condition Details */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Condition Details</h2>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {product.condition.map((c, i) => (
                <li key={i} className={i === 0 ? "font-medium" : ""}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          {/* Care Instructions */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Care Instructions</h2>
            <ul className="list-disc pl-5 text-sm space-y-1">
              {product.care.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
          {/* Shipping & Returns */}
          <div className="mb-6">
            <h2 className="font-semibold mb-2">Shipping & Returns</h2>
            <ul className="space-y-1 text-sm">
              {product.shipping.map((s, i) => (
                <li key={i}>
                  <span className="font-medium">{s.label}:</span>{" "}
                  <span className="text-muted-foreground">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Seller Info */}
          <div className="flex items-center gap-4 mt-8">
            <Image
              src={product.seller.avatar}
              alt={product.seller.name}
              width={48}
              height={48}
              className="rounded-full object-cover border"
            />
            <div>
              <div className="font-semibold">{product.seller.name}</div>
              <div className="text-xs text-muted-foreground">
                Joined {product.seller.joined} • {product.seller.feedback}
              </div>
              <a
                href={product.seller.profileUrl}
                className="text-primary text-xs font-medium hover:underline"
              >
                View seller profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
