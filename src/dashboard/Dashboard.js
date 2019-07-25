import React from "react";
import { AuthConsumer } from "../auth/Guard";
import Infos from "./DashboardInfos";
import Admin from "./DashboardAdmin";

export default function Dashboard() {
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <p>Welcome to your Burger private page</p>
      <AuthConsumer>
        {({ user }) => {
          return (
            <>
              <Infos user={user} />
              <Admin user={user} />
            </>
          );
        }}
      </AuthConsumer>
    </div>
  );
}
