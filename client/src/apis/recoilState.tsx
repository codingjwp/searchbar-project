import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const RecoilState = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilState;
