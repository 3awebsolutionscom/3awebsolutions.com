import { GoArrowRight } from "react-icons/go";
import "./style.css";
import Link from "next/link";

interface CommonBtnTypes {
  link: string;
  text: string;
}

const CommonBtn = ({ link, text }: CommonBtnTypes) => {
  return (
    <Link href={`/${link}`} className="commonBtn">
      {text} <GoArrowRight className="commonBtnIcon" />
    </Link>
  );
};

export default CommonBtn;
