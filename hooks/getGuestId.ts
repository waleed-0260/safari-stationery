// utils/getGuestId.ts
import { v4 as uuidv4 } from "uuid";

export function getGuestId() {
  if (typeof window === "undefined") return null;

  let guestId = localStorage.getItem("guest_user_id");
  if (!guestId) {
    guestId = uuidv4();
    localStorage.setItem("guest_user_id", guestId);
  }
  return guestId;
}
