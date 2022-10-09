import { ref } from 'vue';

import { mount } from '@vue/test-utils';

import { useFilteredJobs } from '@/store/composables';
jest.mock('@/store/composables');

import useConfirmRoute from '@/composables/useConfirmRoute';
jest.mock('@/composables/useConfirmRoute');

import Subnav from '@/components/navigation/SubNav.vue';

describe('Subnav', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe('when user is on job page', () => {
    it('displays job count', () => {
      // also without a ref -> 423
      useConfirmRoute.mockReturnValue(ref(true));

      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }]);

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.text()).toMatch('2 jobs matched');
    });
  });

  describe('when user is not on job page', () => {
    it('does NOT display job count', () => {
      // also without a ref
      useConfirmRoute.mockReturnValue(ref(false));
      useFilteredJobs.mockReturnValue([]);

      const wrapper = mount(Subnav, createConfig());
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
