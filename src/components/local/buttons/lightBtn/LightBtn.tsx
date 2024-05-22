import { GoArrowRight } from "react-icons/go";
import "./style.css";
import Link from "next/link";

interface LightBtnTypes {
  link: string;
  text: string;
}

const LightBtn = ({ link, text }: LightBtnTypes) => {
  return (
    <Link href={`/${link}`} className="lightBtn">
      {text} <GoArrowRight className="lightBtnIcon" />
    </Link>
  );
};

export default LightBtn;
