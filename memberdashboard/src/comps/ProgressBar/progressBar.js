import React, { Fragment, useEffect } from "react";
import useStorage from "../Hooks/useStorage";
import { useMutation } from "@apollo/client";
import { toaster } from "evergreen-ui";
import { UPLOAD_STEPS } from "../../gql/mutations/stepsUpload";
import { BeatLoader } from "react-spinners";

export default function ProgressBar({ file, setFile, category }) {
  const { progress, url } = useStorage(file);
  const [addImage] = useMutation(UPLOAD_STEPS);
  useEffect(() => {
    if (url) {
      console.log(url, category);
      addImage({
        variables: {
          url: url,
          category: category,
          member: "5faab3f05f2cfa263121b326",
        },
      })
        .then((data) => {
          console.log(data);
          if (data) {
            toaster.success("Steps uploaded successfully");
            setFile(null);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url, setFile, addImage, category]);
  return (
    <Fragment>
      <div
        className={`h-2 rounded-sm bg-blue-600 my-4`}
        style={{ width: progress + "%" }}
      ></div>
    </Fragment>
  );
}
