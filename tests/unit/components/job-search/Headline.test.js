import { nextTick  } from 'vue';
import { mount } from '@vue/test-utils'

import Headline from '@/components/job-search/Headline.vue';
//    jest.useFakeTimers("legacy");

describe('Headline', () => {
  describe('displays the introducory action verb', () => {

    beforeEach(()=> {
      jest.useFakeTimers("legacy");
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('tracks whether it had been called', () => {
      
      
      const wrapper = mount(Headline);
      const actionPhrase = wrapper.find("[data-test='action-phrase']");
      expect(actionPhrase.text()).toBe('Build for everyone');

      

    });

    it('changes action verb at consistent interval', () => {
      
      mount(Headline);
      expect(setInterval).toHaveBeenCalled;
      
    });
    it('swaps action verb after first interval', async () => {
      
      const wrapper = mount(Headline);
      jest.runOnlyPendingTimers(); //simulate the passage of time interval
      // console.log(wrapper.vm.action);
      await nextTick(); // tell the view to refresh html
      const actionPhrase = wrapper.find("[data-test='action-phrase']");
      expect(actionPhrase.text()).toBe('Create for everyone');

    });
    it('removes interval when component disappears', async () => {
      
      const wrapper = mount(Headline);
      wrapper.unmount();
      expect(clearInterval).toHaveBeenCalled();
      
    });


  });
});