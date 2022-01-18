//libraries
import { motion } from "framer-motion";

//hooks
import loadImage from "./hooks/useImg";

export function createResource(asyncFn) {
  let status = "pending";
  let result;

  const promise = asyncFn().then(
    (r: Payload) => {
      status = "success";
      result = r;
    },
    (e: Error) => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      switch (status) {
        case "pending":
          throw promise;
        case "error":
          throw result;
        case "success":
          return result;
        default:
          throw result;
      }
    },
  };
}

export function SuspenseImage(props) {
  loadImage(props.src).read();
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
      alt={""}
    />
  );
}
