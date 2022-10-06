import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/navigation/MainNav.vue";

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays company name", () => {
    const $store = {
      state: {
        isLoggedin: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    expect(wrapper.text()).toMatch("Kuka Alenami Ocam");
  });

  it("displays menu items for navigation", () => {
    const $store = {
      state: {
        isLoggedin: false,
      },
    };
    const wrapper = shallowMount(MainNav, createConfig($store));
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at MDB",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("When user is logged out", () => {
    it("prompts user to sign in", () => {
      const $store = {
        state: {
          isLoggedin: false,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
    it("issues call to Vuex to login user", async () => {
      const commit = jest.fn();
      const $store = {
        state: {
          isLoggedin: false,
        },
        commit,
      };

      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginButton = wrapper.find("[data-test='login-button']");

      await loginButton.trigger("click");

      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });
  describe("When user is logged in", () => {
    it("displays user profile picture", () => {
      const $store = {
        state: {
          isLoggedin: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);
    });
    it("displays subnavigation menu with additional information", () => {
      const $store = {
        state: {
          isLoggedin: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);
    });
  });
});
