import getCurrentMediaQuery from "./getCurrentMediaQuery";

var isBreakpoint = breakpoint => {
  if (!breakpoint) return false;

  const pattern = new RegExp("\\+$|\\-$");
  const breakpointList = ["unset", "xs", "sm", "md", "lg", "xl", "xxl"];
  const breakpointCurrent = getCurrentMediaQuery();
  const breakpointCurrentIndex = breakpointList.indexOf(breakpointCurrent);
  const hasModifier = pattern.exec(breakpoint);
  const modifier = hasModifier ? hasModifier[0] : false;
  const breakpointName = hasModifier ? breakpoint.slice(0, -1) : breakpoint;
  const breakpointIndex = breakpointList.indexOf(breakpointName);

  if (breakpointIndex < 0) {
    console.warn(
      `Unrecognized breakpoint. Supported breakpoints are: ${breakpointList.join(
        ", "
      )}`
    );
    return false;
  }

  if (
    (modifier === "+" && breakpointCurrentIndex >= breakpointIndex) ||
    (modifier === "-" && breakpointCurrentIndex <= breakpointIndex) ||
    (!modifier && breakpoint === breakpointCurrent)
  ) {
    return true;
  }

  return false;
};

export default isBreakpoint;
