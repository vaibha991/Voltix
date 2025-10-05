import { NextResponse } from "next/server";

const products = [
  // Electronics
  { id: 1, name: "Laptop", price: 59999, imageUrl: "/laptop.jpg", category: "Electronics", height: "2cm", weight: "1.5kg", padding: "10px", margin: "5px" },
  { id: 2, name: "Laptop", price: 2339999, imageUrl: "/laptop1.jpg", category: "Electronics", height: "2.5cm", weight: "1.7kg", padding: "12px", margin: "6px" },
  { id: 3, name: "Headphones", price: 1999, imageUrl: "/headphones.webp", category: "Electronics", height: "15cm", weight: "200g", padding: "5px", margin: "5px" },
  { id: 4, name: "Smartwatch", price: 9999, imageUrl: "/smartwatch1.webp", category: "Electronics", height: "4cm", weight: "50g", padding: "4px", margin: "4px" },
  { id: 14, name: "Headphones", price: 1999, imageUrl: "/headphone1.webp", category: "Electronics", height: "14cm", weight: "220g", padding: "5px", margin: "5px" },
  { id: 15, name: "Smartwatch", price: 9999, imageUrl: "/smartwatch.webp", category: "Electronics", height: "4.5cm", weight: "55g", padding: "4px", margin: "4px" },
  { id: 24, name: "Headphones", price: 1999, imageUrl: "/headphone.jpg", category: "Electronics", height: "16cm", weight: "250g", padding: "6px", margin: "5px" },
  { id: 25, name: "Smartwatch", price: 9999, imageUrl: "/smartwatch2.webp", category: "Electronics", height: "4cm", weight: "50g", padding: "4px", margin: "4px" },

  // Clothes
  { id: 5, name: "T-Shirt", price: 499, imageUrl: "/tshirt.webp", category: "Clothes", height: "70cm", weight: "200g", padding: "3px", margin: "2px" },
  { id: 6, name: "Sneaker", price: 1299, imageUrl: "/Sneaker.webp", category: "Clothes", height: "12cm", weight: "800g", padding: "5px", margin: "3px" },
  { id: 7, name: "Jacket", price: 2499, imageUrl: "/jacket1.webp", category: "Clothes", height: "80cm", weight: "500g", padding: "20px", margin: "40px" },
  { id: 8, name: "Sneakers", price: 3499, imageUrl: "/sneaker1.webp", category: "Clothes", height: "13cm", weight: "900g", padding: "5px", margin: "3px" },
  { id: 16, name: "Sneakers", price: 34899, imageUrl: "/sneaker2.webp", category: "Clothes", height: "14cm", weight: "950g", padding: "5px", margin: "3px" },
  { id: 17, name: "Jacket", price: 3799, imageUrl: "/jacket2.webp", category: "Clothes", height: "82cm", weight: "550g", padding: "6px", margin: "4px" },
  { id: 21, name: "T-Shirt", price: 44999, imageUrl: "/tshirt2.webp", category: "Clothes", height: "72cm", weight: "210g", padding: "3px", margin: "2px" },
  { id: 22, name: "T-Shirt", price: 29999, imageUrl: "/tshirt1.webp", category: "Clothes", height: "71cm", weight: "205g", padding: "3px", margin: "2px" },

  // Games
  { id: 9, name: "PlayStation 5", price: 49999, imageUrl: "/ps1.webp", category: "Games", height: "39cm", weight: "4.5kg", padding: "8px", margin: "5px" },
  { id: 10, name: "Xbox Series X", price: 44999, imageUrl: "/ps.webp", category: "Games", height: "30cm", weight: "4kg", padding: "8px", margin: "5px" },
  { id: 11, name: "Gaming Chair", price: 29999, imageUrl: "/chair2.webp", category: "Games", height: "120cm", weight: "15kg", padding: "10px", margin: "6px" },
  { id: 12, name: "Gaming Chair", price: 9999, imageUrl: "/chair1.webp", category: "Games", height: "110cm", weight: "14kg", padding: "10px", margin: "6px" },
  { id: 13, name: "Xbox Series X", price: 44999, imageUrl: "/xbox1.webp", category: "Games", height: "30cm", weight: "4kg", padding: "8px", margin: "5px" },
  { id: 18, name: "Nintendo Switch", price: 29999, imageUrl: "/switch1.webp", category: "Games", height: "23cm", weight: "300g", padding: "6px", margin: "4px" },
  { id: 19, name: "Xbox Series X", price: 44999, imageUrl: "/xbox2.jpg", category: "Games", height: "30cm", weight: "4kg", padding: "8px", margin: "5px" },
  { id: 20, name: "Nintendo Switch", price: 29999, imageUrl: "/switch2.webp", category: "Games", height: "23cm", weight: "300g", padding: "6px", margin: "4px" },
];

export async function GET() {
  return NextResponse.json(products);
}
