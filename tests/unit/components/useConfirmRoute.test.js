import { useRoute } from 'vue-router';

jest.mock('vue-router');

import useConfirmRoute from '@/composables/useConfirmRoute.js';

describe('useConfirmRoute', () => {
  it('determines if page route matches specified route', () => {
    useRoute.mockReturnValue({ name: 'home' });
    const routeName = 'home';
    const result = useConfirmRoute(routeName);
    expect(result.value).toBe(true);

  });
});

// import { useRoute } from "vue-router";
// jest.mock("vue-router");

// import useConfirmRoute from "@/composables/useConfirmRoute";

// describe("useConfirmRoute", () => {
//   it("determines if page route matches specified route", () => {
//     useRoute.mockReturnValue({ name: "Home" });
//     const routeName = "Home";
//     const result = useConfirmRoute(routeName);
//     expect(result.value).toBe(true);
//   });
// });
