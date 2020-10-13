import Spruce from "@ryangjchandler/spruce";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

Spruce.store("app");
Spruce.store("action", {
  freezeScroll() {
    disablePageScroll();
  },
  unfreezeScroll() {
    enablePageScroll();
  }
});
