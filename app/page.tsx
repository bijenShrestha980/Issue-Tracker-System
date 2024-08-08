import FilterForm from "@/components/filter-form";
import IssueSection from "@/features/issue/components/issue-section";
import { QueryParams } from "@/types";

export default function Home({ searchParams }: { searchParams: QueryParams }) {
  const q = searchParams?.q || "";
  const paginate = searchParams?.paginate || "";
  const issue_id = searchParams?.issue_id || "";
  const status = searchParams?.status || "";
  const label = searchParams?.label || "";

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-8">Issue Tracker</h1>
      <FilterForm />
      <IssueSection
        q={q}
        paginate={paginate}
        issue_id={issue_id}
        status={status || undefined}
        label={label}
      />
    </main>
  );
}
