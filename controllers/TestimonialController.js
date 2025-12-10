import { getTestimonials } from "../services/TestimonialService.js";
import HttpError from "../helpers/HttpError.js";

export const getAll = async (req, res, next) => {
  try {
    const testimonials = await getTestimonials();
    const result = testimonials.map(testimonial => {
      const { owner, ownerId, ...rest } = testimonial.toJSON();
      return {
        ...rest,
        ownerName: owner?.name || "Unknown"
      };
    });
    res.json(result);
  } catch (error) {
    next(HttpError(500));
  }
}