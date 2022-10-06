import { mount } from "@vue/test-utils"; // named

import TextInput from "@/components/shared/TextInput.vue"; // default

describe("TextInput", () => {
  it("communicates that the user has entered the character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
      }
    });
    const input = wrapper.find('input');
    input.setValue('N');
    input.setValue('NY');
    input.setValue('NYC');
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([['N'], ['NY'], ['NYC']])
  })
})