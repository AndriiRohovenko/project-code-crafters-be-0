import Testimonial from '../db/models/Testimonial.js';
import User from '../db/models/User.js';

async function getTestimonials() {
  return await Testimonial.findAll({
    include: [
      {
        model: User,
        as: 'owner',
        attributes: ['name'],
      },
    ],
  });
}

export { getTestimonials };
