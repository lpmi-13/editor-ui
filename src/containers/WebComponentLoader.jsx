import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProject, setSenseHatAlwaysEnabled } from "../redux/EditorSlice";
import WebComponentProject from "../components/WebComponentProject/WebComponentProject";

const WebComponentLoader = (props) => {
  const loading = useSelector((state) => state.editor.loading);
  const { code, sense_hat_always_enabled } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const proj = {
      type: "python",
      components: [{ name: "main", extension: "py", content: code }],
    };
    dispatch(
      setSenseHatAlwaysEnabled(typeof sense_hat_always_enabled !== "undefined"),
    );
    dispatch(setProject(proj));
  }, [code, sense_hat_always_enabled, dispatch]);

  return loading === "success" ? (
    <>
      <WebComponentProject />
    </>
  ) : (
    <>
      <p>Loading</p>
    </>
  );
};

export default WebComponentLoader;