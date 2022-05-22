import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

const defaultBrowserHistory = {
  url: "/",
  location: { pathName: "" },
  listen: () => {},
};

let browserHistory = defaultBrowserHistory;
if (typeof window !== "undefined") {
  browserHistory = { ...browserHistory, ...window.history };
  browserHistory.location.pathName = window.location.toString();
}

var reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: "be77046b-2506-4fd8-aa5b-c096c5c86c77",
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory },
    },
  },
});

if (typeof window !== "undefined") {
  appInsights.loadAppInsights();
}

export { appInsights, reactPlugin };
