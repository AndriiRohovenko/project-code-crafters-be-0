export default class TestimonialDTO {
  constructor(testimonial) {
    /** @type {string} */
    this.id = testimonial.id;
    /** @type {string} */
    this.owner = testimonial.owner.name;
    /** @type {string} */
    this.comment = testimonial.testimonial;
  }
}
