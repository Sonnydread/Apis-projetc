export default function Loading() {
  // Create an array of 8 items for the skeleton loading cards
  const skeletonCards = Array(8).fill(null);

  return (
    <>
      {/* Header Skeleton */}
      <div className="flex items-center justify-between bg-white px-[96px] py-4">
        <div className="flex items-center gap-[13px]">
          <div className="w-[50px] h-[50px] bg-gray-200 animate-pulse rounded-md"></div>
          <div className="w-[100px] h-[24px] bg-gray-200 animate-pulse rounded-md"></div>
        </div>
        <div className="flex-grow max-w-[525px]">
          <div className="w-full h-[40px] bg-gray-200 animate-pulse rounded-[6px]"></div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="w-[60px] h-[24px] bg-gray-200 animate-pulse rounded-md"></div>
          <div className="w-[36px] h-[36px] bg-gray-200 animate-pulse rounded-full"></div>
        </div>
      </div>

      {/* Movie Listings Header Skeleton */}
      <div className="px-[96px] py-8 bg-white flex items-center space-x-6">
        <div className="w-[200px] h-[36px] bg-gray-200 animate-pulse rounded-md mr-[72px]"></div>
        <div className="flex space-x-6">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="w-[80px] h-[24px] bg-gray-200 animate-pulse rounded-md"></div>
            ))}
        </div>
      </div>

      {/* Movie Cards Grid Skeleton */}
      <div className="px-[96px] py-8 bg-white">
        <div className="grid grid-cols-4 gap-[80px]">
          {skeletonCards.map((_, index) => (
            <div key={index} className="bg-white overflow-hidden">
              <div className="relative">
                <div className="w-full h-[450px] bg-gray-200 animate-pulse rounded-md"></div>
              </div>
              <div className="p-4">
                <div className="w-[100px] h-[16px] bg-gray-200 animate-pulse rounded-md mb-2"></div>
                <div className="w-full h-[24px] bg-gray-200 animate-pulse rounded-md mb-2"></div>
                <div className="flex items-center justify-between my-2">
                  <div className="w-[100px] h-[20px] bg-gray-200 animate-pulse rounded-md"></div>
                  <div className="w-[40px] h-[20px] bg-gray-200 animate-pulse rounded-md"></div>
                </div>
                <div className="w-[150px] h-[16px] bg-gray-200 animate-pulse rounded-md"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button Skeleton */}
      <div className="flex justify-center bg-white py-8 pb-[440px]">
        <div className="w-[120px] h-[40px] bg-gray-200 animate-pulse rounded-full"></div>
      </div>
    </>
  );
}
