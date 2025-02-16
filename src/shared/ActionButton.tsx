import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};
const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <div>
      <AnchorLink
        className="hover: rounded-md bg-secondary-500 px-10 py-2 text-white hover:bg-primary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href="#contactus"
      >
        {children}
      </AnchorLink>
    </div>
  );
};
export default ActionButton;
