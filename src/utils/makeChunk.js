import { lazy } from "react";

export const makeChunk = (name, isComponent = false) => {
  return lazy(() => (isComponent ? import(`components/${name}`) : import(`pages/${name}`)));
};

export const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
