import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const RecoilComponents = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilComponents;
