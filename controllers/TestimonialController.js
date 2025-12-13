import { getTestimonials } from '../services/TestimonialService.js';
import TestimonialDTO from '../dtos/TestimonialDTO.js';

export const getAll = async (req, res, next) => {
  try {
    const testimonials = await getTestimonials();
    const testimonialsDTO = testimonials.map(
      (testimonial) => new TestimonialDTO(testimonial)
    );
    res.json(testimonialsDTO);
  } catch (error) {
    next(error);
  }
};
