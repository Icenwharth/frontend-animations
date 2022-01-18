import React, { useState, useEffect } from "react";

export default function useApi(link, isImg) {
  const [state, setState] = useState({
    status: "pending",
    info: null,
    error: null,
  });
  const { status, error, info } = state;

  useEffect(() => {
    setState({ status: "pending" });

    if (typeof link !== "string") {
      return setState({
        status: "error",
        error: "The link you provide to useInfo should be of 'string' type",
      });
    }
    fetch(link)
      .then((response) => response.json())
      .then(
        (data) => setState({ status: "resolved", info: data }),
        (error) => setState({ status: "error", error })
      );
  }, [link]);

  if (status === "pending") return status;
  if (status === "error") throw error;
  if (status === "resolved") return info;
}
