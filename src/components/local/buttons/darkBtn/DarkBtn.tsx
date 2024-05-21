import { GoArrowRight } from "react-icons/go";
import "./style.css";
import Link from "next/link";

interface DarkBtnTypes {
  link: string;
  text: string;
}

const DarkBtn = ({ link, text }: DarkBtnTypes) => {
  return (
    <Link href={`/${link}`} className="darkBtn">
      {text} <GoArrowRight className="darkBtnIcon" />
    </Link>
  );
};

export default DarkBtn;
