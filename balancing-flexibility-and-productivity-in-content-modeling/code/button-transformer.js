function transformButton(input) {
  return {
    _component: "Button",
    children: input.label,
    to: input.url,
  };
}
