import { useEffect } from "react";
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';
import '/js/main.js?url';

export default function withCarousel(Component, selector) {
    const EnhancedComponent = (props) => {
      useEffect(() => {
        $(document).ready(function () {
          switch (selector) {
            case '.courses-carousel':
              $(selector).owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                loop: true,
                dots: false,
                nav: false,
                responsive: {
                  0: { items: 1 },
                  576: { items: 2 },
                  768: { items: 3 },
                  992: { items: 4 }
                }
              });
              break;
            case '.testimonial-carousel':
              $(selector).owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                items: 1,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                  '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                  '<i class="fa fa-angle-right" aria-hidden="true"></i>'
                ],
              });
              break;
            default:
              $(selector).owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                loop: true,
                dots: false,
                nav: false,
                responsive: {
                  0: { items: 1 },
                  576: { items: 2 },
                  768: { items: 3 },
                  992: { items: 4 }
                }
              });
              break;
          }
        });
      }, [selector]);
  
      return <Component {...props} />;
    };
  
    return EnhancedComponent;
  }