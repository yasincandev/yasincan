import Link from "next/link";
import { FC } from "react";
import { Github } from "../Icons/Github";
import { Linkedin } from "../Icons/Linkedin";
import { Resume } from "../Icons/Resume";
import { TechStacks } from "./Styles";

const ContactPage: FC = () => {
  return (
    <TechStacks>
      <Link href='https://linkedin.com/in/yasincandev' target='_blank'>
        <Linkedin />
      </Link>
      <Link href='https://github.com/yasincandev' target='_blank'>
        <Github />
      </Link>
      <Link
        href='https://drive.google.com/file/d/1qAf-7f6HPLbHbzNaF6fK-W9xlC2GOjfz/view'
        target='_blank'
      >
        <Resume />
      </Link>
    </TechStacks>
  );
};

export default ContactPage;
