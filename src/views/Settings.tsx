import React from "react";
import { Layout } from "./Layout";

export function Settings() {
  return (
    <Layout title="Settings — Mergit">
      <h1>Settings</h1>
      <p className="subtitle">Configure Mergit for your repositories.</p>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Setting</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>trigger</td>
              <td>
                <code>/merge</code>
              </td>
              <td>Comment phrase that triggers a merge</td>
            </tr>
            <tr>
              <td>strategy</td>
              <td>
                <code>squash</code>
              </td>
              <td>Merge strategy: merge, squash, or rebase</td>
            </tr>
            <tr>
              <td>required_checks</td>
              <td>
                <code>all</code>
              </td>
              <td>All checks or a specific list</td>
            </tr>
            <tr>
              <td>delete_branch</td>
              <td>
                <code>true</code>
              </td>
              <td>Delete source branch after merging</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
