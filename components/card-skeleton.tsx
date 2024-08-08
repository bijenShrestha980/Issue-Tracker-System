import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton = () => {
  return (
    <Card className="shadow-md h-[142px] w-full">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-[250px] bg-slate-300" />
            <Skeleton className="h-5 w-[200px] bg-slate-300" />
          </div>
          <Skeleton className="h-5 w-[50px] rounded-full bg-slate-300" />
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <Skeleton className="h-5 w-[60px] bg-slate-300" />
        <Skeleton className="h-5 w-[70px] bg-slate-300" />
      </CardFooter>
    </Card>
  );
};

export default CardSkeleton;
