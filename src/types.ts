export type Product = {
    id: string;
    title: string;
    shortDesc: string;
    fullDesc: string;
    price: number;
    category: string;
    image: string;
    createdAt: Date;
    sellerId?: string;
    sellerName?: string;
};
// This type defines the structure of a product object in the application. It includes properties such as id, title, descriptions, price, category, image URL, creation date, and optional seller information. This type is used throughout the application to ensure consistent handling of product data.
export type Category = "Smartphone" | "Laptop" | "Audio" | "Wearable" | "Camera" | "Accessory";

export type Seller = {
    _id?: string;
    userId: string;
    shopName: string;
    email: string;
    phone: string;
    address: string;
    status: "pending" | "active" | "suspended";
    createdAt: Date;
};
