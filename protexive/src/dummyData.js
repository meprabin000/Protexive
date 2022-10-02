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
        desc: "When bad things happen, we've got your cat covered",
      },
      {
        id: 2,
        subCatName: "Dog",
        desc: "From Hounds and Huskies to Poodles and puppies.",
      },
      {
        id: 3,
        subCatName: "Others",
        desc: "Furry family members on board, we have got a quote.",
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
        subCatName: "Car",
        desc: "From auto insurance for teen drivers to rental cars and more.",
      },
      {
        id: 2,
        subCatName: "Motorcycle",
        desc: "We don’t charge extra for certain motorcycle coverage, so you can get more without paying more.",
      },
      {
        id: 3,
        subCatName: "Boat",
        desc: "Get protection against the risks of owning and operating your boat.",
      },
      {
        id: 4,
        subCatName: "Off-road Vehicles",
        desc: "Enjoy coverage for your snowmobile, golf cart, ATV or other off-road vehicles.",
      },
      {
        id: 5,
        subCatName: "Motorhome",
        desc: "Help protect your motorhome, truck or van camper.",
      },
      {
        id: 6,
        subCatName: "Travel Trailers",
        desc: "Help protect your towed treasure.",
      },
      {
        id: 7,
        subCatName: "Roadside Assistance",
        desc: "We provide towing and labor services when your vehicle is disabled.",
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
        subCatName: "Household",
        desc: "More homeowners choose us as their home insurance company over any other insurer.",
      },
      {
        id: 2,
        subCatName: "Condominium",
        desc: "Help protect your condo from fire, theft, and other covered causes of loss with State Farm.",
      },
      {
        id: 3,
        subCatName: "Renters Insurance",
        desc: "Protect your stuff with renters insurance.",
      },
      {
        id: 4,
        subCatName: "Rental Property",
        desc: "We've created a rental dwelling policy to protect your valuable property.",
      },
      {
        id: 5,
        subCatName: "Personal Articles",
        desc: "Get coverage beyond your homeowners or renters policy to replace your valuable items.",
      },
      {
        id: 6,
        subCatName: "Manufactured Home",
        desc: "We can assist with paying for covered property damage, covered claims for injury and more.",
      },
      {
        id: 7,
        subCatName: "Farm and Ranch",
        desc: "Our very name says we recognize the unique needs of farmers and ranchers, so we got you covered.",
      },
      {
        id: 8,
        subCatName: "Identity Restoration",
        desc: "While we can't protect you from identity theft, we still got you covered.",
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
        subCatName: "Long-term",
        desc: "Long-term disability insurance goes to work when you can't.",
      },
      {
        id: 2,
        subCatName: "Short-term",
        desc: "If you receive a paycheck, here's a way to protect your earned income.",
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
        subCatName: "Supplemental Health",
        desc: "Additional insurance you can purchase to help individuals and families.",
      },
      {
        id: 2,
        subCatName: "Medicare Supplement",
        desc: "Help pick up where Medicare leaves off.",
      },
      {
        id: 3,
        subCatName: "Individual Medical",
        desc: "Trust us for individual major medical insurance",
      },
      {
        id: 4,
        subCatName: "Change Policy",
        desc: "Considering life insurance changes? We got you covered!",
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
        subCatName: "Business Owners Policy",
        desc: "Create a combination of coverages to help protect your unique business.",
      },
      {
        id: 2,
        subCatName: "Commercial Auto",
        desc: "To keep your business on the road to success.",
      },
      {
        id: 3,
        subCatName: "Contractors Policy",
        desc: "Help secure your small business with well-crafted coverage options.",
      },
      {
        id: 4,
        subCatName: "Liability Umbrella",
        desc: "Extra coverage can help you prepare for the things you don't see coming.",
      },
      {
        id: 5,
        subCatName: "Surety & Fidelity Bonds",
        desc: "Help protect the interests of your growing business.",
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
        subCatName: "Term Life",
        desc: "Term life helps with short-term debts, added protection during child-raising years and more.",
      },
      {
        id: 2,
        subCatName: "Whole Life",
        desc: "This permanent policy protects your family's future while building cash value that grows tax-deferred.",
      },
      {
        id: 3,
        subCatName: "Universal Life",
        desc: "This permanent policy with flexible premium payments and death benefits can help protect your loved ones.",
      },
      {
        id: 4,
        subCatName: "Change Policy",
        desc: "Considering life insurance changes? We got you covered!",
      },
      {
        id: 5,
        subCatName: "Change Beneficiary",
        desc: "How do I change my life beneficiary? We got it!",
      },
    ],
  },
];
