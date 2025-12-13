export default class TestimonialDTO {
  constructor(testimonial) {
    /** @type {string} */
    this.id = testimonial.id;
    /** @type {string} */
    this.ownerName = testimonial.owner.name;
    /** @type {string} */
    this.testimonial = testimonial.testimonial;
  }
}
