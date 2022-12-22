import { DirectiveBinding } from "vue"
import { hasIntersectionObserver } from './helper/dom'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    //console.log(binding)
    if (hasIntersectionObserver) {
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const image = entry.target;
            // el.src = binding.value;
            image.setAttribute('src', binding.value)
            imageObserver.unobserve(image);
          }
        });
      });
      imageObserver.observe(el)
    }
  },

}
