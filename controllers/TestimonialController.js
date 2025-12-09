import { getTestimonials } from "../services/TestimonialService.js";
import HttpError from "../helpers/HttpError.js";

export const getAll = async (req, res, next) => {
  try {
    // TODO: Add user name to response when user model is created
    const testimonials = await getTestimonials();
    const result = testimonials.map(testimonial => ({
      ...testimonial.toJSON(),
      owner: "Hardcoded User"
    }));
    res.json(result);
  } catch (error) {
    next(HttpError(500));
  }
}