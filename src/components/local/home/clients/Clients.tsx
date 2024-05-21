import "./style.css";
import adobe from "@/assets/clients/adobe.png";
import bc from "@/assets/clients/britishCouncil.png";
import fiserv from "@/assets/clients/fiserv.png";
import germalto from "@/assets/clients/gemalto.png";
import hcl from "@/assets/clients/hcl.png";
import hp from "@/assets/clients/hp.png";
import jcb from "@/assets/clients/jcb.png";
import landt from "@/assets/clients/landt.png";
import lg from "@/assets/clients/lg.png";
import mahindra from "@/assets/clients/mahindra.png";
import neosoft from "@/assets/clients/neosoft.png";
import nivia from "@/assets/clients/nivea.png";
import tata from "@/assets/clients/tata.png";
import uh from "@/assets/clients/unitedhealth.png";
import serco from "@/assets/clients/Serco.png";
import Image from "next/image";
const Clients = () => {
  return (
    <section className="clients width95 maxWidth">
      <div className="clientTab flex alignCenter justifyCenter ">
        <div className="clientBox">
          <Image src={adobe} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={bc} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={fiserv} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={germalto} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={hcl} alt="Adobe" />
        </div>
      </div>
      <div className="clientTab flex alignCenter justifyCenter gap2">
        <div className="clientBox">
          <Image src={hp} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={jcb} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={landt} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={lg} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={mahindra} alt="Adobe" />
        </div>
      </div>
      <div className="clientTab flex alignCenter justifyCenter gap2">
        <div className="clientBox">
          <Image src={neosoft} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={nivia} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={tata} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={uh} alt="Adobe" />
        </div>
        <div className="clientBox">
          <Image src={serco} alt="Adobe" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
