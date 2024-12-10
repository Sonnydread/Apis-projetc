import React, { Suspense } from "react";
import Desktop1 from "./tester/Desktop1";
import Desktop2 from "./tester/Desktop2";

export default async function Page({ searchParams }: any) {
  const { page } = await searchParams;
  console.log(page);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Desktop1 page={page} />
      </Suspense>
      {/* <Desktop1Client /> */}
      <Desktop2 />
    </>
  );
}
