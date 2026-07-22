"use client"
import { SearchIcon } from "lucide-react";
import MeliInput from "../meli/meli-input.component";
import MeliButton from "../meli/meli-button.component";
import Image from "next/image";
import NAV_LOGO from "@/public/NAV_LOGO.png";
import { useSearchContext } from "@/shared/context/search/search.context";


const HeaderSearch = ({
  className
}: { className?: string }) => {

  const {setSearchTerm, searchTerm} = useSearchContext();  

  return(
    <div className={`flex justify-center items-center py-2 relative  ${className || ""}`}>
      <Image src={NAV_LOGO} alt="Nav Logo" height={30} className="col-span-2 absolute -left-40"/>
      <MeliInput placeholder="Never stop searching..." className="w-2xl h-8" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <MeliButton icon={<SearchIcon />} className="p-0 h-8 w-8"/>
    </div>
  )

}

export default HeaderSearch;