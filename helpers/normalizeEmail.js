export const normalizeEmail = (email) => {
  if (!email) return email;

  return email.trim().toLowerCase().replace(/\s+/g, '');
};
