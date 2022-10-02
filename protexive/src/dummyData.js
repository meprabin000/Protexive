import { MdPets } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { BiHandicap } from "react-icons/bi";
import { GiHealthNormal } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";
import { GiLifeBar } from "react-icons/gi";

import "../src/components/scrollerButton/scrollerButton.css";
export const categories = [
  {
    id: 1,
    categoryName: "Pet",
    icon: <MdPets className="scr-logo" />,
    subCategory: [
      {
        id: 1,
        subCatName: "Cat",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 2,
        subCatName: "Dog",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 3,
        subCatName: "Rabbit",
        desc: "Purr purr purr until owner pets why owner not",
      },
    ],
  },
  {
    id: 2,
    categoryName: "Auto",
    icon: <FaCar className="scr-logo" />,
    subCategory: [
      {
        id: 1,
        subCatName: "Cat-2",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 2,
        subCatName: "Dog-2",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 3,
        subCatName: "Rabbit-3",
        desc: "Purr purr purr until owner pets why owner not",
      },
    ],
  },
  {
    id: 3,
    categoryName: "Home",
    icon: <AiTwotoneHome className="scr-logo" />,
    subCategory: [
      {
        id: 1,
        subCatName: "Cat",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 2,
        subCatName: "Dog",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 3,
        subCatName: "Rabbit",
        desc: "Purr purr purr until owner pets why owner not",
      },
    ],
  },
  {
    id: 4,
    categoryName: "Disability",
    icon: <BiHandicap className="scr-logo" />,
    subCategory: [
      {
        id: 1,
        subCatName: "Cat",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 2,
        subCatName: "Dog",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 3,
        subCatName: "Rabbit",
        desc: "Purr purr purr until owner pets why owner not",
      },
    ],
  },
  {
    id: 5,
    categoryName: "Health",
    icon: <GiHealthNormal className="scr-logo" />,
    subCategory: [
      {
        id: 1,
        subCatName: "Cat",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 2,
        subCatName: "Dog",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 3,
        subCatName: "Rabbit",
        desc: "Purr purr purr until owner pets why owner not",
      },
    ],
  },
  {
    id: 6,
    categoryName: "Business",
    icon: <IoMdBusiness className="scr-logo" />,
    subCategory: [
      {
        id: 1,
        subCatName: "Cat",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 2,
        subCatName: "Dog",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 3,
        subCatName: "Rabbit",
        desc: "Purr purr purr until owner pets why owner not",
      },
    ],
  },
  {
    id: 7,
    categoryName: "Life",
    icon: <GiLifeBar className="scr-logo" />,
    subCategory: [
      {
        id: 1,
        subCatName: "Cat",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 2,
        subCatName: "Dog",
        desc: "Purr purr purr until owner pets why owner not",
      },
      {
        id: 3,
        subCatName: "Rabbit",
        desc: "Purr purr purr until owner pets why owner not",
      },
    ],
  },
];
