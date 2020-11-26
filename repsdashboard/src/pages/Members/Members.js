import React, { Fragment, useState } from "react";
import MembersTable from "../../comps/Lists/MembersTable";

export default function Members(props) {
  return (
    <Fragment>
      <div>
        <h1 className={`h1 py-4 px-8 font-extrabold`}>Members List</h1>
      </div>
      <div className={`px-8 py-4`}>
        <MembersTable />
      </div>
    </Fragment>
  );
}
