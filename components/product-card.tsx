import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";

type ProductCardProps = {
  data: {
    owner: {
      name: string;
      profilePic: string;
    };
    postedAt: string;
    productImage: string;
    productName: string;
    price: string;
    status: string;
  };
};

export function ProductCard({ data }: ProductCardProps) {
  return (
    <Card className="w-full max-w-sm border border-muted shadow-sm group transition">
      <CardHeader className="flex flex-row items-center gap-3 !pb-2 p-4">
        <Image
          src={data.owner.profilePic}
          alt={data.owner.name}
          width={36}
          height={36}
          className="rounded-full object-cover border"
        />
        <div>
          <CardTitle className="text-base font-semibold">
            {data.owner.name}
          </CardTitle>
          <CardDescription className="text-xs">{data.postedAt}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Image
            src={data.productImage}
            alt={data.productName}
            width={400}
            height={300}
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-2 right-2">{data.status}</Badge>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-3 flex flex-col items-start">
        <div className="font-medium text-base line-clamp-1">
          {data.productName}
        </div>
        <div className="text-primary font-semibold text-lg mt-1">
          {data.price}
        </div>
      </CardFooter>
    </Card>
  );
}
