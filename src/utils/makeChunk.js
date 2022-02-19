import { lazy } from "react";

export const makeChunk = (name) => {
  return lazy(() => import(`components/${name}`));
};
export const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};
