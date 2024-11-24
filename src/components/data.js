import plain_icon from "../assets/tees/PlainWhite.png";
import pattern_icon from "../assets/tees/Pattern.png";
import plain_white_jeans_icon from "../assets/tees/PlainJeans.png";
import pattern_grey_icon from "../assets/tees/PatternGrey.png";
import leather_bag from "../assets/tees/bag.png";
import casual_sweater from "../assets/tees/sweater.jpg";
import round_sunglasses from "../assets/tees/sung.jpg";
import women_top from "../assets/tees/womentoop.jpg";
import iphone_img from "../assets/electronics/iphone16.png";
import iphone_plus_img from "../assets/electronics/iphone16plus.png";
import macbook from "../assets/electronics/macbook.png";
import dellxps from "../assets/electronics/dellxps.png";
import diningtable from "../assets/electronics/diningtable.png";
import sofa from "../assets/electronics/sofa.png";
import microwave from "../assets/electronics/microwave.png";
import refrigerator from "../assets/electronics/refrigerator.png";

const categories = {
  Cloths: {
    Men: [
      {
        id: 1,
        name: "Plain White T-Shirt",
        image: plain_icon,
        price: 199,
        description: "A classic, versatile t-shirt made from 100% soft cotton.",
      },
      {
        id: 2,
        name: "Pattern T-Shirt",
        image: pattern_icon,
        price: 299,
        description: "Stylish V-neck t-shirt with a subtle pattern, made from cotton.",
      },
      {
        id: 3,
        name: "Plain White Jeans",
        image: plain_white_jeans_icon,
        price: 299,
        description: "Comfortable, slim-fit white jeans made from 100% cotton.",
      },
      {
        id: 4,
        name: "Pattern T-Shirt",
        image: pattern_grey_icon,
        price: 499,
        description: "A trendy patterned t-shirt, perfect for casual wear.",
      },
    ],
    Women: [
      {
        id: 5,
        name: "Plain White Top",
        image: women_top,
        price: 699,
        description: "Simple yet elegant white cotton top, perfect for all occasions.",
      },
      {
        id: 7,
        name: "Casual Sweater",
        image: casual_sweater,
        price: 299,
        description: "Cozy woolen sweater ideal for chilly weather.",
      },
    ],
    Accessories: [
      {
        id: 6,
        name: "Gray Leather Bag",
        image: leather_bag,
        price: 999,
        description: "A stylish gray leather handbag, perfect for any occasion.",
      },
      {
        id: 8,
        name: "Round Sunglasses",
        image: round_sunglasses,
        price: 999,
        description: "Sleek golden-black round sunglasses for a chic look.",
      },
    ],
  },

  Electronics: {
    "Mobile Phones": [
      {
        id: 9,
        image: iphone_img,
        name: "iPhone 14",
        price: 999,
        description: "Latest iPhone with advanced features and improved performance.",
      },
      {
        id: 10,
        image: iphone_plus_img,
        name: "iPhone Plus",
        price: 899,
        description: "The iPhone Plus with a larger display and great camera.",
      },
    ],
    Laptops: [
      {
        id: 11,
        image: macbook,
        name: "MacBook Pro",
        price: 1299,
        description: "Powerful MacBook Pro with exceptional speed and performance.",
      },
      {
        id: 12,
        image: dellxps,
        name: "Dell XPS 13",
        price: 999,
        description: "Sleek, high-performance laptop with long battery life.",
      },
    ],
  },

  Home: {
    Furniture: [
      {
        id: 13,
        image: diningtable,
        name: "Dining Table",
        price: 499,
        description: "A modern dining table with a stylish design to fit any dining room.",
      },
      {
        id: 14,
        image: sofa,
        name: "Sofa",
        price: 899,
        description: "Comfortable and spacious sofa, perfect for any living room.",
      },
    ],
    Appliances: [
      {
        id: 15,
        image: microwave,
        name: "Microwave",
        price: 199,
        description: "Compact and efficient microwave for quick cooking and reheating.",
      },
      {
        id: 16,
        image: refrigerator,
        name: "Refrigerator",
        price: 799,
        description: "Energy-efficient refrigerator with ample storage space.",
      },
    ],
  },
};

categories["All"] = {
  Products: [
    // Cloths products (Men, Women, Accessories)
    ...categories.Cloths.Men,
    ...categories.Cloths.Women,
    ...categories.Cloths.Accessories,

    // Electronics products (Mobile Phones, Laptops)
    ...categories.Electronics["Mobile Phones"],
    ...categories.Electronics.Laptops,

    // Home products (Furniture, Appliances)
    ...categories.Home.Furniture,
    ...categories.Home.Appliances,
  ],
};

export default categories;
