import React from "react";

const CodeGroup = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <span className="flex gap-5 items-center justify-center">
      {children}
    </span>
  );
};

export default CodeGroup;
