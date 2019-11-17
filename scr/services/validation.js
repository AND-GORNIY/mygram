//@flow

export const validation = (data: {
  phoneNumber: string,
  password: string,
}): boolean => {
  if (data.phoneNumber.length < 3 || data.password.length < 3) {
    return false;
  }
  return true;
};
