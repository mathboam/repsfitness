import React, { Fragment, useEffect } from "react";
import useStorage from "../hooks/useStorage";
// import { useMutation } from "@apollo/client";
// import { toaster } from "evergreen-ui";
// import { UPLOAD_STEPS } from "../../gql/mutations/stepsUpload";
// import { BeatLoader } from "react-spinners";

export default function ProgressBar({ file, setFile, setProfile }) {
  const { progress, url } = useStorage(file);
  useEffect(() => {
    if (url) {
      setProfile(url);
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <Fragment>
      <div
        className={`h-2 rounded-lg bg-teal-600 py-2 flex justify-center items-center text-white my-4`}
        style={{ width: progress + "%" }}
      >
        <span>{progress && parseInt(progress)}</span>
      </div>
      <p>uploading image(please wait....)</p>
    </Fragment>
  );
}
