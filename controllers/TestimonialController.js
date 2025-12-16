import { getTestimonials } from '../services/TestimonialService.js';
import TestimonialDTO from '../dtos/TestimonialDTO.js';
import ctrlWrapper from '../helpers/ctrlWrapper.js';

export const getAll = ctrlWrapper(async (req, res) => {
  const testimonials = await getTestimonials();
  const testimonialsDTO = testimonials.map(
    (testimonial) => new TestimonialDTO(testimonial)
  );
  res.json(testimonialsDTO);
});
