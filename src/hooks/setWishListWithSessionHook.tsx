import { useEffect, useState } from "react";
import { Book } from "../types/book";

export const setWishListWithSessionHook = () => {
  const [wishList, setWishList] = useState<Book[]>([]);

  useEffect(() => {
    const wishListStoraged = sessionStorage.getItem("wishList");
    if (wishListStoraged) {
      setWishList(JSON.parse(wishListStoraged));
    }
  }, []);

  return { wishList, setWishList };
};
