import pubData from "../../../data/publications.json";
import { Suspense } from "react";
import PublicationsClient from "../../components/PublicationsClient";

export default function PublicationsPage() {
  const { googleScholar, covers, list } = pubData;
  return (
    <Suspense fallback={null}>
      <PublicationsClient googleScholar={googleScholar} covers={covers} list={list} />
    </Suspense>
  );
}
