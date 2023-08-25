import { ReactNode, Suspense } from "react";
import { RecoilRoot } from "recoil";
import ErrorBoundary from "./ErrorBoundary";

const RecoilComponents = ({ children }: { children: ReactNode }) => {
  return (
    <RecoilRoot>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading .....</div>}>{children}</Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
};

export default RecoilComponents;
