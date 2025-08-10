import { Badge } from "@/components/ui/badge";
import Link from "next/link";
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
    <Card className="w-full max-w-sm border-none shadow-none group transition">
      <Link href={"/detail"}>
        <CardHeader className="flex flex-row items-center gap-3 !pb-2 p-0">
          <Image
            src={data.owner.profilePic}
            alt={data.owner.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <CardTitle className="text-base">{data.owner.name}</CardTitle>
            <CardDescription className="text-xs">
              {data.postedAt}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <Image
              src={data.productImage}
              alt={data.productName}
              width={400}
              height={300}
              className="w-full h-60 object-cover rounded-t-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            />
            <Badge className="absolute top-2 right-2">{data.status}</Badge>
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <div className="mt-3">
            <div className="font-normal text-base">{data.productName}</div>
            <div className="text-primary font-semibold text-lg mt-1">
              {data.price}
            </div>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
