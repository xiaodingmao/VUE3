import { DirectiveBinding } from "vue"
import { hasIntersectionObserver,scrollParent } from './helper/dom'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    //console.log(binding)
    if (hasIntersectionObserver) {
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const image = entry.target;
            const parent = scrollParent(el);
            // el.src = binding.value;
            image.setAttribute('src', binding.value)
            imageObserver.unobserve(image);
          }
        });
      },{
        rootMargin: "0px 0px 500px 0px"
      });
      imageObserver.observe(el)
    }
  },

}
