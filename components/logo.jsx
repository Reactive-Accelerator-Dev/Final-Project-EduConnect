import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "../public/assets/images/lws_logo.svg";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[100px]", className)} src={logo} alt="logo" />
  );
};
