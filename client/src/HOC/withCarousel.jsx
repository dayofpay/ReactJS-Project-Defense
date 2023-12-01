import { useEffect } from "react";
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';
import '/js/main.js?url';

export default function withCarousel(Component, selector) {
  const EnhancedComponent = (props) => {
    useEffect(() => {
      $(selector).owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          }
        }
      });
    }, [selector]);

    return <Component {...props} />;
  };

  return EnhancedComponent;
}
