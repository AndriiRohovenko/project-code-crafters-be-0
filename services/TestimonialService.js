import Testimonial from "../db/models/Testimonial.js";

async function getTestimonials() {
  return await Testimonial.findAll();
}

export { getTestimonials };