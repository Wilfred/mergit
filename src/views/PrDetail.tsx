import React from "react";
import { Layout } from "./Layout";

export function PrDetail({ id }: { id: string }) {
  return (
    <Layout title={`PR #${id} — Mergit`}>
      <h1>Pull Request #{id}</h1>
      <p className="subtitle">Merge status and details.</p>

      <div className="card">
        <p className="empty">
          PR details will appear here once webhooks are connected.
        </p>
      </div>
    </Layout>
  );
}
