import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./ErrorBoundary";

const RecoilState = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <ErrorBoundary fallback={<div>Error</div>}>{children}</ErrorBoundary>
    </RecoilRoot>
  );
};

export default RecoilState;
