import { Suspense } from "react";
import Form from "@/components/Form";
import { Skeleton } from "@/components/ui/skeleton";
import IssueById from "@/features/issue/components/issue-by-id";
import IssueSection from "@/features/issue/components/issue-section";
import { QueryParams } from "@/types";

export default function Home({ searchParams }: { searchParams: QueryParams }) {
  const q = searchParams?.q || "";
  const paginate = searchParams?.paginate || "20";
  const issue_id = searchParams?.issue_id || "";
  const status = searchParams?.status || "";
  const label = searchParams?.label || "";

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Issue Tracker</h1>
      <Form />
      {q || issue_id || status || label ? (
        <Suspense key={q} fallback={<Skeleton className="h-[152] w-full" />}>
          <IssueById
            q={q}
            paginate={paginate}
            issue_id={issue_id}
            status={status || undefined}
            label={label}
          />
        </Suspense>
      ) : (
        <IssueSection />
      )}
    </main>
  );
}
