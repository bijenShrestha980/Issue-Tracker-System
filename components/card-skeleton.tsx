import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <Card className="shadow-md h-[96px] w-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <Skeleton className="h-6 w-[100px] bg-slate-300" />
          <Skeleton className="h-6 w-[58px] rounded-full bg-slate-300" />
        </CardTitle>
      </CardHeader>
    </Card>
  );
};

export default CardSkeleton;
