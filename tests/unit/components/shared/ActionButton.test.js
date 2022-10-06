import { mount } from "@vue/test-utils"; // named

import ActionButton from "@/components/shared/ActionButton.vue"; // default

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Clickable");
  });
  it("applies one of several classes", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
        text: "Clickable",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});